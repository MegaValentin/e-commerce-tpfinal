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
                    <button class="agregar" id="${id}">Agregar al carrito</button>
                </div>
            `;
            main.appendChild(productoDiv);
        });
    }
}
