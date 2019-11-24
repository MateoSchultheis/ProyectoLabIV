import Producto from '../modelo/producto';

export async function obtenerProducto(req, res) {
    try {
        console.log(req.params.idProducto);
        const productos = await Producto.findOne({
            where: { id: req.params.idProducto }
        });

        if (productos) {
            res.json(productos)
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

export async function crearProducto(req, res) {
    try {
        const productos = await Producto.create({
            codigo: req.body.codigo,
            descripcion: req.body.descripcion,
            precUnit: req.body.precUnit
        });

        if (productos) {
            res.status(201).json({
                data: productos
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

export async function obtenerProductos(req, res) {
    try {
        const productos = await Producto.findAll();

        res.json(productos);
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function eliminarProducto(req, res) {
    try {
        const cantidadBorrados = await Producto.destroy({
            where: { id: req.params.idProducto }
        });

        res.json({
            message: `Se eliminaron ${cantidadBorrados} productos`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function editarProducto(req, res) {
    try {
        const producto = await Producto.findOne({
            where: { id: req.params.idProducto }
        })

        const { codigo, descripcion, pu } = req.body

        if (producto) {
            const editados = await producto.update({
                codigo: codigo,
                descripcion: descripcion,
                precUnit: pu
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}