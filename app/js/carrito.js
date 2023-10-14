export function carrito(){
    
    document.addEventListener('DOMContentLoaded', () =>{
     
        const carritoContainer = document.getElementById('carrito')
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
        
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
            
            const formularioCompra = document.createElement('form')
            formularioCompra.classList.add('formulario-compra')
            formularioCompra.action = 'compraExitosa.html'
            formularioCompra.innerHTML = `
                <div class="resumen-compra">
                    <h2>Resumen de Compra</h2>
                    <p>Total: $ <span id="total">${total}</span></p>
                </div>
                <div class="campo-formulario">
                    <label for="numero-tarjeta">Nro de Tarjeta:</label>
                    <input type="number" id="numero-tarjeta"  required>
                </div>

                <div class="campo-formulario">
                    <label for="vencimiento">Vencimiento:</label>
                    <input type="number" id="vencimiento"  required>
                </div>

                <div class="campo-formulario">
                    <label for="codigo-seguridad">Codigo de Seguridad:</label>
                    <input type="number" id="codigo-seguridad"  required>
                </div>

                <div class="campo-formulario">
                    <label for="nombre-propietario">Nombre del Propietario:</label>
                    <input type="text" id="nombre-propietario" required>
                </div>
                <button class="realizar-compra">Realizar Compra</button>
            `;
            carritoDiv.appendChild(formularioCompra)
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