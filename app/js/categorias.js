export function catalogo(){
    const productos = "/app/data/productos.json"

    const catalogo = document.getElementById('catalago')
    const productosContainer = document.getElementById('productos')

    getCategorias(productos)

    function getCategorias(url){
        fetch(url).then(response => response.json()).then(data => {
            const productos = data.productos;
            const categorias = [...new Set(productos.map(producto => producto.categoria))];
            
            mostrarCategorias(categorias)
            
        }).catch(error => console.error('Error:', error));
    }
    
    function mostrarCategorias(dato){
        catalogo.innerHTML = ``;

        dato.forEach(categorias => {
            const categoriaDiv = document.createElement('div')
            categoriaDiv.classList.add('cards-categoria')
            console.log(categorias);
            categoriaDiv.innerHTML = `
                <div class="categorias">
                    <a href="#" data-categoria="${categorias}">${categorias}<img src="./app/img/categorias/${categorias}.png" alt="${categorias}"></a>
                </div>
            `;

            catalogo.appendChild(categoriaDiv)
             
        });
        
        const linksCategorias = document.querySelectorAll('.cards-categoria a');
        linksCategorias.forEach(link => {
            link.addEventListener('click', (event) =>{
                event.preventDefault();
                const categoria = event.target.dataset.categoria
                mostrarProductosPorCategoria(categoria);
            })
        })
    }
    
    function mostrarProductosPorCategoria(categoria){
        console.log(categoria)
        fetch(productos).then(response => response.json()).then(data => {
            const productosFiltrados = data.productos.filter(producto => producto.categoria === categoria)
            mostrarProductos(productosFiltrados)
            
        }).catch(error => console.error('Error:', error));
    }

    function mostrarProductos(dato){
        console.log(dato)
        productosContainer.innerHTML = ``
        dato.forEach(productos => {
            const {id, producto, imagen,  precio, detalle, popularidad, categoria } = productos;
            const productosDiv = document.createElement('div')
            productosDiv.classList.add('cards-productos')
            productosDiv.innerHTML = `
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
            productosContainer.appendChild(productosDiv)

            const agregarBtn = productosDiv.querySelector('.agregar')
            agregarBtn.addEventListener('click', agregarAlCarrito)
        })
        

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