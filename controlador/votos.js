import Servicio from '../servicio/votos.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    guardarVoto = async (req,res) => {
        const voto = req.body
        const votoGuardado = await this.servicio.guardarVoto(voto)
        res.json(votoGuardado)
    }

    resultadosGenerales = async (req,res) => {
        const resultadosGenerales = await this.servicio.resultadosGenerales()
        console.log(resultadosGenerales)
        res.json(resultadosGenerales)
    }
}

export default Controlador
