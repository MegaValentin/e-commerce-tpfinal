import { navBar } from "./js/navbar.js";
import { vistaProductos } from "./js/productos.js";

navBar()

function getCurrentFileName() {
    let pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
    
}

const currentFileName = getCurrentFileName();

if (currentFileName === 'vistaProductos.html') {
    
    vistaProductos();
}
