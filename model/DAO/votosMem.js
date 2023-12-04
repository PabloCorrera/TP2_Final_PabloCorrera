class ModelMem {
    constructor() {
        this.votos = []
    }

    getVotos = () => {
        return this.votos
    }

    guardarVoto = async voto => {
        this.votos.push(voto)
        
    }

}

export default ModelMem