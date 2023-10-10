export function detalleProductos(){

    window.addEventListener('DOMContentLoaded', () => {
        const parametrosURL = new URLSearchParams(window.location.search); 
        const productoId = parametrosURL.get('id');  
        if (productoId) {
            obtenerProductoPorId(productoId);
        }
    });

    //esta funcion recibe un ID y busca un producto en el JSON por ese ID
    function obtenerProductoPorId(id){
        console.log(id)
        const objeto = new XMLHttpRequest()
        //solicitud GET
        objeto.open('GET', '/app/data/productos.json', true)
        objeto.onload = function(){
          
            const data = JSON.parse(objeto.responseText)
            const productoEncontrado = data.productos.find(producto => producto.id === parseInt(id))
            mostrarDetalle(productoEncontrado) 
        }
        objeto.onerror = function(){
            console.error('Error de red')
        }
        objeto.send()
    }

    function mostrarDetalle(producto){
        const detalle = document.getElementById('detalle')
        detalle.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.producto}" class="box1">
            <div class="box2">
                <h2>${producto.producto}</h2>
                <p>${producto.detalle}</p>
                <p>Precio: $ ${producto.precio}</p>
                <p>Popularidad: ${producto.popularidad}</p>
                <p>Categoría: ${producto.categoria}</p>
                <div class="btn">
                    <a href="./categorias.html">Volver a productos</a>
                    <button class="agregar" id="${producto.id}">Agregar al carrito</button>
                <div>
            </div>
        `
           
            
    }
}