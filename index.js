//IMPORTAMOS APP DEL ARCHIVO APP.JS
import app from './src/app.js';
//IMPORTAMOS LA INSTANCIA DE SEQUELIZE
import { sequelize } from './src/database/database.js';
//Importar los Modulos creados para visualizar las tablas a la fuerza
import './src/models/personaModel.js';
import './src/models/juegosModel.js';
import './src/models/eventoModel.js';
import './src/models/comentariosModel.js';
import './src/models/citasModel.js';
import { PORT } from './src/config/config.js';
//SERVIDOR BASICO QUE ESTA ESCUCHANDO EN EL PUERTO 3000
async function main() {
    try {
        //ELIMINA Y CREA TABLAS
        await sequelize.sync({ force: false });
        app.listen(PORT);
        console.log('server is listening on port :)', PORT)

    } catch (error) {
        console.log("Unable to connect to the database: ", error);
    }
}
main();