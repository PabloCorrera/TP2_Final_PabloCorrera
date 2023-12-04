import express from 'express'
import Controlador from '../controlador/reservas.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/comensalesPorMenu/:timestamp?', this.controlador.comensalesPorMenu)
        this.router.post('/guardarReserva', this.controlador.guardarReserva)
        // this.router.put('/:id', this.controlador.actualizarProducto)
        // this.router.delete('/:id', this.controlador.borrarProducto)

        return this.router
    }
}

export default Router

