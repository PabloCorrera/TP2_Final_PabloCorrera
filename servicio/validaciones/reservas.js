import Joi from 'joi'



export const validar = reserva => {

    const tipoMenu = {
        VEGANO: 'vegano',
        OMNIVORO: 'omnivoro',
        SINTACC: 'Sin tacc'
    }
    

    const reservaSchema = Joi.object({
      fechaReserva: Joi.date().timestamp().required(),
      nombreResponsable: Joi.string().min(1).required(),
      numeroTelefono: Joi.string().pattern(/^\d+$/).required(),
      cantidadComensales: Joi.number().integer().min(1).required(),
      comensales: Joi.array().items(
        Joi.object({ tipoMenu: Joi.string().valid(
            tipoMenu.OMNIVORO,
            tipoMenu.SINTACC,
            tipoMenu.VEGANO).required()
        })
      ).min(1).required()
    });

    const {error} = reservaSchema.validate(reserva)
    if(error) {
        return { result : false, error }
    } 
    return {result: true}

    



}