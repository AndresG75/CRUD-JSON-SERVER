import {mostrarAlerta} from './funciones.js'
import{ guardarCliente} from './API.js';


(function(){

    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit',validarFormulario);

   async  function validarFormulario(e){

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value    ;

        const obj_form = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validarObjeto(obj_form)){
            mostrarAlerta('Todos los campos son obligatoios');
            return
        }

        await guardarCliente(obj_form);
        window.location.href = 'index.html';
    }

    function validarObjeto(cliente){
        return !Object.values(cliente).every(element => element !== '');
    }

})();