import { Router } from 'express';
import {obtenerFactura, obtenerFacturas, crearFactura, eliminarFactura} from '../controller/factura-controller';

const facturasRutas = Router();

facturasRutas.get('/:idFactura', obtenerFactura);
facturasRutas.get('/', obtenerFacturas);
facturasRutas.post('/', crearFactura);
facturasRutas.delete('/:idFactura', eliminarFactura);


export default facturasRutas;