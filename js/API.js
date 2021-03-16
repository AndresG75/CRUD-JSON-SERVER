const url = "http://localhost:4000/clientes";

export async function guardarCliente(cliente){

    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(cliente),
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });        
        
    } catch (error) {
        console.log(error);
    }

}


export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async (id)=>{

    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })

    } catch (error) {
        console.log(error);
    }
}

export const obtenerCliente = async (id)=>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async (cliente)=>{

    await fetch(`${url}/${cliente.id}`,{
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers:{
            'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
          }
    })
}