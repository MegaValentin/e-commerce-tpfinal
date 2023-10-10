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
            if (objeto.status >= 200 && objeto.status < 400){

                const data = JSON.parse(objeto.responseText)
                const productoEncontrado = data.productos.find(producto => producto.id === parseInt(id))

                if (productoEncontrado){
                    mostrarDetalle(productoEncontrado)
                }
                else{
                    console.error("Producto no encontrado")
                }
    
            }else{
                console.error("error al cargar el archivo")
            }
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
                    <a href="#">Agregar al carrito</a>

                <div>
            </div>
        `
           
            
    }
}