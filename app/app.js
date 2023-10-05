const productos = "/app/data/productos.json"

const main = document.getElementById('cards-productos')

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
        console.log(`${producto}`)
        productoDiv.innerHTML = `
        <img src="${imagen}" alt="${producto}">
        <div class="producto-info">
            <h3>${producto}</h3>
            <span class="precio">${precio}</span>

        </div>
        `;
        main.appendChild(productoDiv);
    });
}