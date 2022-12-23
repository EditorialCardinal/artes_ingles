const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

exports.createAccessToken = function(user) {
    const payload = {
      id: user._id,
      nombres: user.nombres,
      email: user.email,
      texto: user.texto   
    };

    return jwt.sign({
        data: payload
    }, process.env.SECRETA, { expiresIn: 7200 });  
};