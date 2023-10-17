export function navBar(){
    const navbar = document.getElementById("barraNavegacion")

    navbar.innerHTML = ``
    const navegacion = document.createElement('div')
    navegacion.classList.add('container')
    
    navegacion.innerHTML = `
        
        <div class="logo">
            <h1>MEGA MERCADO</h1>
        </div>
        <div class="menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./categorias.html">Categoría</a></li>
                <li><a href="./carrito.html">Ver Carrito</a></li>
            </ul>
        </nav>
        
        `;
    navbar.appendChild(navegacion)
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
}
