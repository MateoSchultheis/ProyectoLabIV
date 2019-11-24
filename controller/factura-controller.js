import Factura from '../modelo/factura';

export async function crearFactura(req, res) {
    try {
        const facturas = await Factura.create({
            tipo: req.body.tipo,
            fecha: req.body.fecha,
            numero: req.body.numero,
            ptoVenta: req.body.ptoVenta,
            clienteId: req.body.clienteId
        });

        if (facturas) {
            res.status(201).json({
                data: facturas
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

export async function obtenerFactura(req, res) {
    try {
        // console.log(req.params.idFactura);
        const facturas = await Factura.findOne({
            where: { id: req.params.idFactura }
        });

        if (Factura) {
            res.json(facturas)
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

export async function obtenerFacturas(req, res) {
    try {
        const facturas = await Factura.findAll();

        res.json(facturas);
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function eliminarFactura(req, res) {
    try {
        const cantidadBorrados = await Factura.destroy({
            where: { id: req.params.idFactura }
        });

        res.json({
            message: `Se eliminaron: ${cantidadBorrados} facturas`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}