import express from 'express';
import morgan from 'morgan';
import database from './conexionBD';

//importamos rutas
import clientesRutas from './ruta/cliente-ruta';
import productosRutas from './ruta/producto-ruta';

//inicilizar express
var cors = require('cors');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/clientes', clientesRutas)
app.use('/api/productos', productosRutas)

//database.sync({ force: true })
database.sync()
  .then(() => console.log('Base de datos sincronizada'));

//exportamos app
export default app;