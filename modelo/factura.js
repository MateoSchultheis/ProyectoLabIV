import sequalize from 'sequelize';
import database from '../conexionBD';

const Factura = database.define(
    'facturas',
    {
        id: {
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: {
            type: sequalize.STRING(1)
        },
        fecha: {
            type: sequalize.STRING(120)
        },
        numero: {
            type: sequalize.INTEGER
        },
        ptoVenta: {
            type: sequalize.INTEGER
        },
        total: {
            type: sequalize.INTEGER
        },
        //REVISAR ESTO DE ABAJO, FIJARTE SI TENGO QUE HACER UN PUSH DE ITEMS AQUI
        clienteId: {
            type: sequalize.INTEGER
        },
    }
)

export default Factura;