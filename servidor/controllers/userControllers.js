const Users = require('../models/Users');
const { validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const Pines = require('../models/Pines');
//const jwt = require('../services/jwt');


exports.agregarUsuarios = async(req, res) => {
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    const { nombres, email, password, pin , institucion} = req.body;

    try {
        let user = await Users.findOne({ email });
        if(user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        //Crea nuevo usuario
        user = new Users(req.body);

        //VALIDAMOS QUE EL PIN NO SE HAYA UTILIZADO Y QUE EXISTA
        let valPin = await Pines.find({pin});

        if(valPin.length === 0){
            return res.status(400).json({ msg: 'Pin no existe' });
        }    

        if(valPin[0].estado == 1){
            return res.status(400).json({ msg: 'Pin ya fue utilizado'});
        }        
        
        //Modificamos el valor de estado de 0 a 1 para que no se pueda volver a usar
        await Pines.updateOne({pin: valPin[0].pin}, {$set: {estado: 1}});

        //Encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        //Agregamos el nombre del libro a los datos de usuario
        user.texto = valPin[0].texto;

        //Guardar nuevo usuario
        await user.save();        

        //Mensaje de confirmacion
        res.status(200).json({ msg: 'El usuario creado correctamente' });
    } catch (error) {
        res.status(400).send('Hubo un error');
    }    
}