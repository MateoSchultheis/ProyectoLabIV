import sequalize from 'sequelize';
import database from '../conexionBD';

const Cliente = database.define(
    'clientes',
    {
        id: {
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: sequalize.STRING(80)
        },
        direccion: {
            type: sequalize.STRING(120)
        },
        cuit: {
            type: sequalize.INTEGER(15)
        },
    }
)

export default Cliente;