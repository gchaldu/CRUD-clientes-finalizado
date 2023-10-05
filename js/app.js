import { deleteCliente, getClientes } from "./api.js";

(function() {

  document.addEventListener('DOMContentLoaded', mostrarClientes)

  const clienteFilas = document.querySelector('#clientes')
  clienteFilas.addEventListener('click', eliminar)

  
  async function mostrarClientes(){
    const clientes = await getClientes()
    
    clientes.forEach(cliente => {
      
      const {apellido, nombre, dni, fechaInicio, id} = cliente;

      const tr = document.createElement('tr');
      const tdApe = document.createElement('td');
      tdApe.textContent=apellido;
      const tdNom = document.createElement('td');
      tdNom.textContent = nombre;
      const tdDNI = document.createElement('td');
      tdDNI.textContent = dni;
      const tdfecha = document.createElement('td');
      tdfecha.textContent = fechaInicio;
      const tdEliminar = document.createElement('td')
      tdEliminar.innerHTML = `<a href="#" data-cliente="${id}" id="eliminar">Eliminar</a>`
      const tdEditar = document.createElement('td')
      tdEditar.innerHTML = `<a href="./editar-cliente.html?id=${id}">Modificar</a>`

      tr.appendChild(tdApe)
      tr.appendChild(tdNom)
      tr.appendChild(tdDNI)
      tr.appendChild(tdfecha)
      tr.appendChild(tdEditar)
      tr.appendChild(tdEliminar)

      clienteFilas.appendChild(tr)

    });
  }
  function eliminar(e){

    if(e.target.id==='eliminar'){
      const id = e.target.dataset.cliente
      const ok = confirm(`Desea Eliminar el cliente con id. ${id}`)
      if(ok===true)
      {
        deleteCliente(id)
      }else{
        return; 
      }
    }
  }
  })();