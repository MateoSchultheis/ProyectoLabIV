import sequalize from 'sequelize';
import database from '../conexionBD';

const Item = database.define(
    'items',
    {
        id: {
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad: {
            type: sequalize.INTEGER
        },
        codigo: {
            type: sequalize.STRING(50)
        },
        descripcion: {
            type: sequalize.STRING(300)
        },
        iva: {
            type: sequalize.FLOAT
        },
        productoId: {
            type: sequalize.INTEGER
        },
        facturaId: {
            type: sequalize.INTEGER
        }
    }
)

export default Item;