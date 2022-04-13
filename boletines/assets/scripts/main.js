
//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(links){
    console.log(links);
})

*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
})
*/

// obtener los elementos de la clase .close
// recorrerlos
// agregar un evento click a cada uno


let link = document.querySelectorAll(".close");
    
link.forEach(function(link){
        link.addEventListener("click",function(evento){
            evento.preventDefault();
            let content = document.querySelector(".content");

            // quitarle las clases de animacion 
            content.classList.remove("fadeInDownBig");
            content.classList.remove("animated");

            //agregar clases para animar salida
            content.classList.add("fadeOutUpBig");
            content.classList.add("animated");

            //setTimeout(function(){
                location.href = "/";
            //},1000);
        });
    });



/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star");
})

*/