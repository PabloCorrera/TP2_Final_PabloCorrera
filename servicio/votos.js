import ModelMem from '../model/DAO/votosMem.js'
class Servicio {
    constructor() {
        this.model = new ModelMem()
    }

    validar = (voto) => {
        let error=""
        const distritos = ["zona1", "zona2", "zona3", "zona4"]
        const candidatos= ["candidatoA", "candidatoB", "candidatoC", "enblanco"]
        if(!distritos.includes(voto.distrito)){
            error = error+"zona no correspondiente "
        }
        if(!candidatos.includes(voto.candidato)){
            error = error+"candidato no valido"
        }
        return error
    }
    
    guardarVoto = async voto => {
        let rta = this.validar(voto)
        if(rta === ''){
            console.log('Voto guardado')
            const votoGuardado = await this.model.guardarVoto(voto)
            return votoGuardado
        } else{
            console.log(rta)

        }
    }

    resultadosGenerales = async () => {
        const votosGuardados = this.model.getVotos(); 
        const votosGenerales = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 };

        votosGuardados.forEach((voto) => {
            const { candidato } = voto;
            votosGenerales[candidato]++;
        });

        return { generales: votosGenerales };
    };
    

}

export default Servicio