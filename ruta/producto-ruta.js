import { Router } from 'express';
import {obtenerProducto, obtenerProductos, crearProducto, eliminarProducto, editarProducto} from '../controller/producto-controller';

const productosRutas = Router();

productosRutas.get('/:idProducto', obtenerProducto);
productosRutas.get('/', obtenerProductos);
productosRutas.post('/', crearProducto);
productosRutas.delete('/:idProducto', eliminarProducto);
productosRutas.put('/:idProducto', editarProducto)


export default productosRutas;