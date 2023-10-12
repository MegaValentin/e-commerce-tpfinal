export function carrito(){
    
    document.addEventListener('DOMContentLoaded', () =>{
     
        const carritoContainer = document.getElementById('carrito')
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        if(carrito.length > 0){
            renderizarCarrito()
        }
        else{
            const carritoVacio = document.createElement('div')
            carritoVacio.classList.add('carrito-vacio')
            carritoContainer.innerHTML= ``
            carritoVacio.innerHTML = `
            <h1>No hay ninguna producto cargado</h1>
            <img src="./app/img/cargarCarrito.png" alt="cargar carrito">
            `
            carritoContainer.appendChild(carritoVacio)
        }
        
        function renderizarCarrito(){
            const carritoDiv = document.createElement('div')
            carritoDiv.classList.add('carrito-div')
            carritoContainer.innerHTML=` `

            carritoDiv.innerHTML = `
                <ul class="list-productos">
                    ${carrito.map(item => `
                        <li class="carrito-producto">
                            <img src="${item.imagen}" alt="${item.producto}">
                            <div class="info">
                                <h3>${item.producto}</h3>
                                <p>Precio: $ ${item.precio}</p>
                                <p>Cantidad: ${item.cantidad}</p>
                            </div>
                            <div>
                                <button class="eliminar" data-id="${item.id}">Eliminar</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>    
            `;
            carritoContainer.appendChild(carritoDiv)
        
            const deleteButtons = document.querySelectorAll('.eliminar');
            deleteButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const productoId = parseInt(button.dataset.id);
                    console.log(productoId)
                    eliminarProducto(productoId)

                    //Preguntar
                    window.location.reload();
                });
            });

        }
        
        function eliminarProducto(productoId) {
            const filtrar = carrito.filter(item => item.id !== productoId)
            localStorage.setItem('carrito', JSON.stringify(filtrar))
            renderizarCarrito()
        }
        
       
    })
   
    
} 