import ModelMem from '../model/DAO/reservasmem.js'
import { validar } from "./validaciones/reservas.js"
class Servicio {
    constructor() {
        this.model = new ModelMem()
    }

    comensalesPorMenu = async timestamp => {
        const reservas = this.model.obtenerReservas()
        //console.log(reservas)
        const comensalesPorMenu = {};
        const reservasDesdeFecha = reservas.filter(reserva => reserva.fechaReserva >= new Date(timestamp).getTime());
        console.log('reservasDesdeFecha')
        reservasDesdeFecha.forEach(reserva => {
            console.log('foreach de reservas')
            reserva.comensales.forEach(comensal => {
                console.log('paso por comensal')
              const tipoMenu = comensal.tipoMenu;
              comensalesPorMenu[tipoMenu] = (comensalesPorMenu[tipoMenu] || 0) + 1;
            });
          });
        
        return comensalesPorMenu
    }   

    guardarReserva = async reserva => {
        reserva.fechaReserva = new Date();
        const res = validar(reserva)
        if(res.result) {
            const reservaGuardada = await this.model.guardarReserva(reserva)
            return reservaGuardada
        }
        else {
            console.log(res.error)
            throw res.error
        }
    }

    // calculoProductos = async tipo => {
    //     let resultado = 'calculo no soportado'
    //     switch(tipo) {          
    //         case 'promedio-precios':
    //             const productos = await this.model.obtenerProductos()
    //             const sumatoria = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0 )
    //             const promedio = sumatoria / productos.length
    //             resultado = Number(promedio.toFixed(2))
    //             break

    //         default:
    //             break
    //     }

    //     return { [tipo] : resultado }
    // }   

    

    // actualizarProducto = async (id, producto) => {
    //     const productoActualizado = await this.model.actualizarProducto(id,producto)
    //     return productoActualizado
    // }

    // borrarProducto = async id => {
    //     const productoBorrado = await this.model.borrarProducto(id)
    //     return productoBorrado
    // }
}

export default Servicio