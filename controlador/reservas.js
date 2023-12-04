import Servicio from '../servicio/reservas.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    guardarReserva = async (req,res) => {
        const reserva = req.body
        const reservaGuardada = await this.servicio.guardarReserva(reserva)
        res.json(reservaGuardada)
        //res.redirect('/')
    }

    comensalesPorMenu = async (req,res) => {
        const { timestamp } = req.params
        const productos = await this.servicio.comensalesPorMenu(timestamp)
        res.json(productos)
    }

    // calculoProductos = async (req,res) => {
    //     const { tipo } = req.params
    //     const resultado = await this.servicio.calculoProductos(tipo)
    //     res.json(resultado)
    // }

  

    // // --------- PUT (actualización parcial) ----------
    // actualizarProducto = async (req,res) => {
    //     const { id } = req.params
    //     const producto = req.body
    //     const productoActualizado = await this.servicio.actualizarProducto(id, producto)
    //     res.json(productoActualizado)
    // }

    // borrarProducto = async (req,res) => {
    //     const { id } = req.params
    //     const productoBorrado = await this.servicio.borrarProducto(id)
    //     res.json(productoBorrado)
    // }
}

export default Controlador
