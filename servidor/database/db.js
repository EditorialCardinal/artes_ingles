const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB_MONGO, () =>{
            console.log('DB Conectada');
        });
    } catch (error) {
        console.log('hubo un error')        
    }
}

module.exports = conectarDB;