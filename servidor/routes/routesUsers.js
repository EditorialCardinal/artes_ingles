const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();
const auth = require('../middleware/auth');
const { check} = require('express-validator');


router.post('/api/addUser', 
    [
        check('nombres', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('institucion', 'Debes agragar tu Institución ').not().isEmpty(),
        check('pin', 'Debes agragar un pin').not().isEmpty(),
        check('password', 'La contraseña debe ser minimo de 8 caracteres').isLength({ min: 8})
    ],
    userControllers.agregarUsuarios
);

router.post('/api/login', userControllers.loginUser);
router.get('/api/auth', auth, userControllers.usuarioAutenticado);

module.exports = router;