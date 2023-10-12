export function carrito(){
    
    document.addEventListener('DOMContentLoaded', () =>{
        const carritoContainer = document.getElementById('carrito')
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        
        function renderizarCarrito(){

            carritoContainer.innerHTML = `
            <div class="carrito">
                <ul class="list-productos">
                    ${carrito.map(item => `
                        <li class="carrito-producto">
                            <img src="${item.imagen}" alt="${item.producto}">
                            <div class="info">
                                <h3>${item.producto}</h3>
                                <p>Precio: $ ${item.precio}</p>
                                <p>Detalle: ${item.detalle}</p>
                                <p>Cantidad: ${item.cantidad}</p>
                            </div>
                            <div>
                                <button class="eliminar" data-id="${item.id}">Eliminar</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>    
            </div>
            `;
        
            const deleteButtons = document.querySelectorAll('.eliminar');
            deleteButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const productoId = parseInt(button.dataset.id);
                    console.log(productoId)
                    eliminarProducto(productoId)
                    
                });
            });

        }
        
        function eliminarProducto(productoId) {
            const filtrar = carrito.filter(item => item.id !== productoId)
            localStorage.setItem('carrito', JSON.stringify(filtrar))
            renderizarCarrito()
        }
        
       renderizarCarrito()
    })
   
    
} 