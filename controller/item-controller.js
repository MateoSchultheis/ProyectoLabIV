import Item from '../modelo/item';

export async function obtenerItem(req, res) {
    try {
        console.log(req.params.idItem);
        const items = await Item.findOne({
            where: { id: req.params.idItem }
        });

        if (items) {
            res.json(items)
        }
        else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function obtenerItems(req, res) {
    try {
        const items = await Item.findAll();

        res.json(items);
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function crearItem(req, res) {
    try {
        const items = await Item.create({
            cantidad: req.body.nombre,
            codigo: req.body.direccion,
            descripcion: req.body.cuit,
            iva: req.body.iva,
            productoId: req.body.productoId,
            facturaId: req.body.facturaId
        });

        if (items) {
            res.status(201).json({
                data: items
            });
        }
        else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function eliminarItem(req, res) {
    try {
        const cantidadBorrados = await Item.destroy({
            where: { id: req.params.idItem }
        });

        res.json({
            message: `Se eliminaron ${cantidadBorrados} items`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}