import {obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';
(function(){

    const formulario = document.querySelector('#formulario');
    
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded',async ()=>{

        const parametrosURL = new URLSearchParams(window.location.search);
        const IDCliente = parseInt( parametrosURL.get('id'));
        console.log(IDCliente);

        const cliente = await obtenerCliente(IDCliente);
        console.log(cliente);
        mostrarCliente(cliente);

        formulario.addEventListener('submit',validarFormulario);
    })

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    async function validarFormulario(e){
        // e.preventDefault();

        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if(validarObjeto(cliente)){
            mostrarAlerta('Todos los campos son obligatoios');
            return
        }

        await editarCliente(cliente);
        window.location.href = 'index.html';

    }
    function validarObjeto(cliente){
        return !Object.values(cliente).every(element => element !== '');
    }

})();