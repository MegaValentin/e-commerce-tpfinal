export function vistaProductos(){
    const productos = "/app/data/productos.json"

    const main = document.getElementById('main')

    getProductos(productos)

    function getProductos(url) {
        fetch(url).then(res => res.json()).then(dato => {
            console.log(dato.productos)
            mostrarProductos(dato.productos)
        })
    }
    function mostrarProductos(dato){
        main.innerHTML = ``

        dato.forEach(productos => {
            const {id, producto, imagen,  precio, detalle, popularidad, categoria } = productos;
            const productoDiv = document.createElement('div')
            productoDiv.classList.add('cards-productos')
            console.log(`${producto}`)
            productoDiv.innerHTML = `
                <img src="${imagen}" alt="${producto}">
                <div class="producto-info">
                    <h3>${producto}</h3>
                    <span class="precio">${precio}</span>
                </div>
                <div class="vista-general">
                    <a href="detalleProducto.html?id=${id}" class="leer-mas">Leer mas</a>      
                    <button class="agregar" data-producto='${JSON.stringify(productos)}'>Agregar al carrito</button>
                </div>
            `;
            main.appendChild(productoDiv);

            const agregarBtn = productoDiv.querySelector('.agregar')
            agregarBtn.addEventListener('click', agregarAlCarrito)
        });
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

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
}
