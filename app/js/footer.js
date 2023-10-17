export function footer(){
    const footer = document.getElementById("footer")
    footer.classList.add('footer')

    footer.innerHTML = `
    
        <div class="container">
            <div class="row">
                <div class="box1">
                    <h3>Información de Contacto</h3>
                    <p class="info-contacto">Mega Valentin</p>
                    <p class="info-contacto">Teléfono: (54) 2314400457</p>
                    <p class="info-contacto">Email: valentinmega3@gmail.com</p>
                </div>
                <div class="box2">
                    <h3>Síguenos en Redes Sociales</h3>
                    <ul class="social-icons">
                        <li><a href="https://github.com/MegaValentin"><img src="./app/img/rs/gitHub.png" alt="gitHub"></a></li>
                        <li><a href="https://www.instagram.com/valentin_mega/"><img src="./app/img/rs/instagram.png" alt="instagram"></a></li>
                        <li><a href="https://www.linkedin.com/in/valent%C3%ADn-mega-04a160221/"><img src="./app/img/rs/linkedin.png" alt="Linkedin"></a></li>
                    </ul>
                </div>
            </div>
        </div>
  
    `
    
}
