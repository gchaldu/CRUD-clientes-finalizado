import { postCliente } from "./api.js"
import { validar } from "./funciones.js"

(function(){

    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', async (e) =>{
        e.preventDefault()
        const c = crearCliente()
        console.log(c)
        if( !validar(c))
        {
            alert('Todos los campos son obligatorios')
            return;
        }
        await postCliente(c)
    })

    const crearCliente = () => {
        const apellido = document.querySelector('#apellido')
        const nombre = document.querySelector('#nombre')
        const dni = document.querySelector('#dni')
        const fechaInicio = document.querySelector('#fecha-inicio')

        const cliente = {
            apellido: apellido.value,
            nombre: nombre.value,
            dni: dni.value,
            fechaInicio: fechaInicio.value,
        }

        return cliente
    }


})()