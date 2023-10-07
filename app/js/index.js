export function catalogo(){
    const productos = "/app/data/productos.json"

    const catalogo = document.getElementById('catalago')

    getCategorias(productos)

    function getCategorias(url){
        fetch(url).then(response => response.json()).then(data => {
            const productos = data.productos;
            const categorias = [...new Set(productos.map(producto => producto.categoria))];
            
            mostrarCategorias(categorias)
            
        }).catch(error => console.error('Error:', error));
    }
    
    function mostrarCategorias(dato){
        catalogo.innerHTML = `
         `;
        dato.forEach(categorias => {
            const catagoriaDiv = document.createElement('div')
            catagoriaDiv.classList.add('cards-categoria')
            console.log(categorias);
            catagoriaDiv.innerHTML = `
                <div class="categorias">
                    <a href="#">${categorias}<img src="./app/img/categorias/${categorias}.png" alt="${categorias}"></a>
                </div>
            `;
            catalogo.appendChild(catagoriaDiv)
            
            
        });
    }
    
      
    

}