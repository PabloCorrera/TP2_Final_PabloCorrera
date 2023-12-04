import express from 'express'
import Controlador from '../controlador/votos.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
       
        this.router.post('/votar', this.controlador.guardarVoto)
        this.router.get('/resultadosGenerales', this.controlador.resultadosGenerales)

        return this.router
    }
}

export default Router

