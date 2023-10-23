export function catalogo(){
    //esta variable contiene la ruta del archivo JSON
    const productos = "/app/data/productos.json"

    //Selecciono un elemento del DOM con el id 'catalogo' y 'producto'
    const catalogo = document.getElementById('catalago')
    const productosContainer = document.getElementById('productos')
    
    getCategorias(productos)
    
    //Esta funcion realiza una solicitud de busqueda de las categorias de productos desde el archivo JSON utilizando la funcion fetch
    function getCategorias(url){
        fetch(url).then(response => response.json()).then(data => {
            const productos = data.productos;
            //tomo la lista de categorias y las convierto en nuevo conjunto Set
            const categorias = [...new Set(productos.map(producto => producto.categoria))];
            
            mostrarCategorias(categorias)
            
        }).catch(error => console.error('Error:', error));
    }
    function megaMercado(){
        productosContainer.innerHTML = `
        <div>
            <img src="./app/img/MEGA-removebg-preview.png" alt="MEGA MEGA">
            <h1>Las mejores OFERTAS</h1>
        </div>
        
        `
    }
    //creo un elemento HTML para cada categoria de productos
    function mostrarCategorias(dato){
        catalogo.innerHTML = ``;
        megaMercado()
        dato.forEach(categorias => {
            const categoriaDiv = document.createElement('div')
            categoriaDiv.classList.add('cards-categoria')
            console.log(categorias);
            categoriaDiv.innerHTML = `
                
                <a href="#" data-categoria="${categorias}" class="categoria">${categorias}<img src="./app/img/categorias/${categorias}.png" alt="${categorias}"></a>
                
            `;

            catalogo.appendChild(categoriaDiv)
             
        });
        
        const linksCategorias = document.querySelectorAll('.cards-categoria a');
        //evento click a cada categoria para que cuando se haga click, se muestren los productos correspondientes
        linksCategorias.forEach(link => {
            link.addEventListener('click', (event) =>{
                event.preventDefault();
                const categoria = event.target.dataset.categoria
                mostrarProductosPorCategoria(categoria);
            })
        })
    }
    //Filtro los productos por la categoría seleccionada y muestro estos productos.
    function mostrarProductosPorCategoria(categoria){
        console.log(categoria)
        fetch(productos).then(response => response.json()).then(data => {

            const productosFiltrados = data.productos.filter(producto => producto.categoria === categoria)
            if(productosFiltrados <= 0){
                megaMercado()
            }
            else{
                mostrarProductos(productosFiltrados)
            }

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
                    <button class="agregar" data-producto='${JSON.stringify(productos) /*convierte un objeto en una cadena de texto JSON.*/}'>Agregar al carrito</button>
                </div>
            `;
            productosContainer.appendChild(productosDiv)

            const agregarBtn = productosDiv.querySelector('.agregar')
            agregarBtn.addEventListener('click', agregarAlCarrito)

        })
        

    }
    function agregarAlCarrito(event){
        //extrae la informacion del producto desde el atributo 'data-producto'; esta informacion debe ser un objeto JSON que reprensenta un producto
        const producto = JSON.parse(event.target.dataset.producto)
        //Recupero el contenido del carrito desde el almacenamiento del Local. Si no hay ningun carrito almacenado, se crea uno vacio
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        // Esto busca en el carrito si ya hay un producto con el mismo id que el producto que el usuario está intentando agregar
        const productoCarrito = carrito.find(item => item.id === producto.id)

        if (productoCarrito){
            productoCarrito.cantidad++
        }else{
            producto.cantidad = 1
            carrito.push(producto)
        }
        mostrarMensaje(`Se agrego "${producto.producto}" correctamente`)
        //se actualiza el carrito en el localstorage para reflejar los cambios realizados
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    //Muestra un mensaje durante un breve tiempo
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