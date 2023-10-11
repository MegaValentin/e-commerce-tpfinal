export function carrito(){
    
    document.addEventListener('DOMContentLoaded', () =>{
        const carritoContainer = document.getElementById('carrito')
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoContainer.innerHTML = `
        <div class="carrito">
            <h2>Carrito de compras</h2>
            <ul>
                ${carrito.map(item => `
                    <li>
                        <h3>${item.producto}</h3>
                        <img src="${item.imagen}" alt="${item.producto}">
                        <p>Precio: $ ${item.precio}</p>
                        <p>Detalle: ${item.detalle}</p>
                        <p>Popularidad: ${item.popularidad}</p>
                        <p>Categoría: ${item.categoria}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                    </li>
                `).join('')}
            </ul>
        </div>
        
    `;
    
    })
   

} 