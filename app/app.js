import { navBar } from "./js/navbar.js";
import { vistaProductos } from "./js/productos.js";
import { catalogo } from "./js/categorias.js";
import { footer } from "./js/footer.js";

navBar()
footer()
function getCurrentFileName() {
    let pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
    
}

const currentFileName = getCurrentFileName();
if (currentFileName === 'categorias.html'){
    catalogo()
}
else if (currentFileName === 'vistaProductos.html') {
    vistaProductos();
}
