let imagenes = [
    {
        "url": "./images/Fondo.jpg",
        "nombre": "La familia Olympic",
        "descripcion": "El RMS Titanic fue construido por la empresa britanica White Star Line, dirigida por el empresario J. Bruce Ismay en los astilleros de Harland & Wolf dirigidos por Lord Pirrie"
    },
    {
        "url": "./images/olympic.jpg",
        "nombre": "La familia Olympic",
        "descripcion": "El Titanic y el Olympic eran bastante similares, si no es que iguales. Esto se debió a que Thomas Andrews y Alexander Carslile utilizaron casi los mismos planos."
    },
    {
        "url": "./images/mapa.jpg",
        "nombre": "Su recorrido",
        "descripcion": "El Titanic sarpo del puerto de Liverpool, el 10 de Abril de 1912, con el capitan Smith comandandolo."
    },
    {
        "url": "./images/choque.png",
        "nombre": "El hundimiento",
        "descripcion": "La tarde el 13 de abril, fue la ultima vez que el Titanic vería la luz del día, pues se impactó a las 23:40 de este mismo dia."
    },
    {
        "url": "./images/Lusitania.jpg",
        "nombre": "La competencia",
        "descripcion": "El Lusitania."
    },
    {
        "url": "./images/Mauritania.jpg",
        "nombre": "La competencia",
        "descripcion": "El Mauritania."
    },
    {
        "url": "./images/Carpathia.jpg",
        "nombre": "La competencia",
        "descripcion": "El Carpathia."
    },
    {
        "url": "./images/Majestic.jpg",
        "nombre": "La competencia",
        "descripcion": "El Majestic."
    },
    {
        "url": "./images/Titanic2.jpg",
        "nombre": "En la actualidad",
        "descripcion": "Vista del Titanic en la actualidad, llevando más de 100 años bajo las aguas del atlantico norte."
    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

posicionCarrusel();

atras.addEventListener('click', function(){
    actual -=1;

    if (actual == -1){
        actual = imagenes.length - 1;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
})  
adelante.addEventListener('click', function(){
    actual +=1;

    if (actual == imagenes.length){
        actual = 0;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
})  

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>';
        }
        else{
            puntos.innerHTML += '<p>.<p>';
        }
    }
}