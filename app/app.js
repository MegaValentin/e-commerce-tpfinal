import { navBar } from "./js/navbar.js";
import { vistaProductos } from "./js/productos.js";
import { catalogo } from "./js/categorias.js";
import { footer } from "./js/footer.js";
import { detalleProductos } from "./js/detalleProducto.js";
import { carrito } from "./js/carrito.js";

navBar()
footer()

function getCurrentFileName() {
    //utilizo el objeto window.location.pathname para obtener la ruta del archivo
    let pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
    
}

const currentFileName = getCurrentFileName();
//comparo currentFileName con diferentes nombres de archivos y llamo las funciones correspondientes
if (currentFileName === 'index.html') {
    vistaProductos()
}
else if (currentFileName === 'categorias.html'){
    catalogo()
}
else if (currentFileName === 'detalleProducto.html'){
    detalleProductos()
}
else if(currentFileName === 'carrito.html'){
    carrito()
}
