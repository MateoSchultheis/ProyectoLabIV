import { Router } from 'express';
import {obtenerItem, obtenerItems, crearItem, eliminarItem} from '../controller/item-controller';

const itemsRutas = Router();

itemsRutas.get('/:idItem', obtenerItem);
itemsRutas.get('/', obtenerItems);
itemsRutas.post('/', crearItem);
itemsRutas.delete('/:idItem', eliminarItem)


export default itemsRutas;