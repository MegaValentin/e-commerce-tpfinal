export function detalleProductos(){

    window.addEventListener('DOMContentLoaded', () => {
        //accedo a los parametros de la URL. Devuelve la cadena de consulta de la URL actual
        const parametrosURL = new URLSearchParams(window.location.search); 
        //obtengo el valor del parametro ID de la URL
        const productoId = parametrosURL.get('id');  
        if (productoId) {
            obtenerProductoPorId(productoId);
        }
    });

    //esta funcion recibe un ID y busca un producto en el JSON por ese ID
    function obtenerProductoPorId(id){
        console.log(id)
        //hago una solicitud HTTP desde el navegador
        const objeto = new XMLHttpRequest()
        //solicitud GET, URL del recurso que solicito, indico que la solicitud es asincrona
        objeto.open('GET', '/app/data/productos.json', true)
        //Define una función que se ejecutará cuando la solicitud sea completada con éxito
        objeto.onload = function(){
            
            //convierto la respuesta en un objeto. Esto me permite acceder y manipular los datos de manera mas sencilla
            const data = JSON.parse(objeto.responseText)
            //busco  un elemento que cumpla con la condicion dada
            const productoEncontrado = data.productos.find(producto => producto.id === parseInt(id))
            //muestro los detalles del producto
            mostrarDetalle(productoEncontrado) 
        }
        objeto.onerror = function(){
            console.error('Error de red')
        }
        //Envía la solicitud HTTP.
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
                    <button class="agregar" data-producto='${JSON.stringify(producto)}'>Agregar al carrito</button>
                <div>
            </div>
        `;
        const agregarBtn = detalle.querySelector('.agregar')
        agregarBtn.addEventListener('click', agregarAlCarrito)    
    }
    
    function agregarAlCarrito(event){
        const producto = JSON.parse(event.target.dataset.producto)
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const productoCarrito = carrito.find(item => item.id === producto.id)

        if (productoCarrito){
            productoCarrito.cantidad++
        }else{
            producto.cantidad = 1
            carrito.push(producto)
        }

        mostrarMensaje(`Se agrego "${producto.producto}" correctamente`)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    function mostrarMensaje(mensaje){
        const mensajeDiv = document.createElement('div')
        mensajeDiv.classList.add('mensaje')
        mensajeDiv.textContent = mensaje

        document.body.appendChild(mensajeDiv)

        setTimeout(() => {
            mensajeDiv.remove()
        },2000)
    }
}