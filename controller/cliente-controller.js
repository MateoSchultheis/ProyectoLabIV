import Cliente from '../modelo/cliente';

export async function obtenerCliente(req, res) {
    try {
        console.log(req.params.idCliente);
        const clientes = await Cliente.findOne({
            where: { id: req.params.idCliente }
        });

        if (Cliente) {
            res.json(clientes)
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

export async function crearCliente(req, res) {
    try {
        const clientes = await Cliente.create({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            cuit: req.body.cuit
        });

        if (clientes) {
            res.status(201).json({
                data: clientes
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

export async function obtenerClientes(req, res) {
    try {
        const clientes = await Cliente.findAll();

        res.json(clientes);
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function eliminarCliente(req, res) {
    try {
        const cantidadBorrados = await Cliente.destroy({
            where: { id: req.params.idCliente }
        });

        res.json({
            message: `Se eliminaron ${cantidadBorrados} clientes`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function editarCliente(req, res) {
    try {
        const cliente = await Cliente.findOne({
            where: { id: req.params.idCliente }
        })

        const { nombre, cuit, direccion } = req.body

        if (cliente) {
            const editados = await cliente.update({
                nombre: nombre,
                cuit: cuit,
                direccion: direccion
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}