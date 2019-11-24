import { Router } from 'express';
import {obtenerCliente, obtenerClientes, crearCliente, eliminarCliente, editarCliente} from '../controller/cliente-controller';

const clientesRutas = Router();

clientesRutas.get('/:idCliente', obtenerCliente);
clientesRutas.get('/', obtenerClientes);
clientesRutas.post('/', crearCliente);
clientesRutas.delete('/:idCliente', eliminarCliente);
clientesRutas.put('/:idCliente', editarCliente)


export default clientesRutas;