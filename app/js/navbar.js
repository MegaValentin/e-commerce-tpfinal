export function navBar(){
    //Obtengo  el elemento HTML con el ID "barraNavegacion"
    const navbar = document.getElementById("barraNavegacion")

    navbar.innerHTML = ``
    //creo un nuevo elemento
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
    //El elemento navegacion lo añado como hijo del elemento navbar
    navbar.appendChild(navegacion)
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    //Evento click al elemento menuToggle.Cuando se hace clic en el botón de menú, se ejecuta la función anónima
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
}
