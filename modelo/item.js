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
            type: sequalize.NUMBER
        },
        productoId: {
            type: sequalize.NUMBER
        },
        facturaId: {
            type: sequalize.NUMBER
        }
    }
)

export default Item;