export function navBar(){
    const navbar = document.getElementById("barraNavegacion")

    navbar.innerHTML = ``
    const navegacion = document.createElement('nav')
    
    
    navegacion.innerHTML = `
            <div class="logo">
                <h1>Mi Logo</h1>
            </div>
            <ul class="nav-links">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./vistaProductos.html">Productos</a></li>
                <li><a href="#">Categoria</a></li>
            </ul>
        `;
        navbar.appendChild(navegacion)
}
