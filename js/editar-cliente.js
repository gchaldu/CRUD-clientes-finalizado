import { getCliente, putCliente } from "./api.js";
import { validar } from "./funciones.js";

(function () {

    
    const inputApellido = document.querySelector('#apellido')
    const inputNombre = document.querySelector('#nombre')
    const inputDni = document.querySelector('#dni')
    const inputFechaInicio = document.querySelector('#fecha-inicio')
    const inputId = document.querySelector('#id')
    
    document.addEventListener('DOMContentLoaded', async() => {
        const parametrosURL = new URLSearchParams (window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await getCliente(idCliente);

        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function mostrarCliente(cliente){
        const { id, apellido, nombre, dni, fechaInicio } = cliente;
        inputApellido.value = apellido
        inputNombre.value = nombre
        inputDni.value = dni
        inputFechaInicio.value = fechaInicio
        inputId.value = id
    }
    
    function validarCliente(e){
        e.preventDefault();

        const objCliente = {
            apellido: inputApellido.value,
            nombre: inputNombre.value,
            dni: inputDni.value,
            fechaInicio: inputFechaInicio.value,
            id: inputId.value
        }

        if( !validar(objCliente))
        {
            alert('Todos los campos son obligatorios')
            return;
        }
        putCliente(objCliente)
        
    }


})();