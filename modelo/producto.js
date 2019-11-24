import sequalize from 'sequelize';
import database from '../conexionBD';

const Producto = database.define(
    'productos',
    {
        id: {
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo: {
            type: sequalize.STRING(50)
        },
        descripcion: {
            type: sequalize.STRING(300)
        },
        precUnit: {
            type: sequalize.INTEGER
        },
    }
)

export default Producto;