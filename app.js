let $totalPersonajes = document.getElementById ("totalPersonajes")
let $cuadro = document.getElementById ("cuadro")
let todosPersonajes = [];
let $verMas = document.getElementById ("verMas")

let pagina = 1;

let $numeroPagina = document.getElementById ("numeroPagina");
let $totalPaginas = document.getElementById ("totalPaginas")
let $primerPaginaB = document.getElementById ("primerPagina");
let $siguienteB = document.getElementById ("siguiente");
let $anteriorB = document.getElementById ("anterior");
let $ultimaPaginaB = document.getElementById ("ultimaPagina");

let $todosB = document.getElementById("todos");
let $mujerB = document.getElementById("mujer");
let $hombreB = document.getElementById("hombre");
let $sinGeneroB = document.getElementById("sinGenero");
let $desconocidoB = document.getElementById("desconocido");

// FETCH
function usarFetch (numeroPagina) {
    respuesta = fetch (`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`);
    respuesta.then((data)=> {
    return data.json ()
    
})
.then ((data)=> {
    resultados = data.results;
    informacion = data.info;
    cuadro (resultados);
    $numeroPagina.innerHTML = numeroPagina;
    $totalPaginas.innerHTML = informacion.pages;
    }
)

.catch ((error) => {
    console.log (error)
});
};

usarFetch (pagina);

$numeroPagina.innerHTML = `<p> Pagina actual = ${pagina}</p>`;


// TODOS LOS PERSONAJES

function cuadro (resultados) {
    $cuadro.innerHTML = "";
    $totalPersonajes.innerHTML = resultados.length;
        for (let i=0; i<resultados.length; i++) {
        $cuadro.innerHTML +=  `<div class="cuadrodatos">
                                <img src=${resultados[i].image} alt="">
                                <p> <span class="detalle"> Nombre: </span> ${resultados[i].name}</p>
                                <p> <span class="detalle"> Género: </span> ${resultados[i].gender}</p>
                                <p><span class="detalle"> Especies: </span> ${resultados[i].species}</p>
                                <p><span class="detalle"> Estado: </span> ${resultados[i].status}</p>
                                <p><span class="detalle"> Origen: </span> ${resultados[i].origin.name}</p>
                                <p><span class="detalle"> Locación: </span> ${resultados[i].location.name}</p>
                                <a href="#"> <span class="verMas">Ver mas...</span> ${resultados[i].id}</a> 
                                </div>`                                                            
    }
    }





    


// FILTROS POR GENERO

function filtrarTodos () {
    let todos = resultados;
    cuadro (todos);
}
$todosB.addEventListener ("click",filtrarTodos);


function filtrarMujeres () {
    let mujeres = resultados.filter ((personaje) => {
        return personaje.gender === "Female";
    })
    cuadro (mujeres);
}
$mujerB.addEventListener ("click",filtrarMujeres);

function filtrarHombres () {
    let hombres = resultados.filter ((personaje) => {
        return personaje.gender === "Male";
    })
    cuadro (hombres);
}
$hombreB.addEventListener ("click",filtrarHombres);

function filtrarSinGenero () {
    let sinGenero = resultados.filter ((personaje) => {
        return personaje.gender === "genderless";
    })
    cuadro (sinGenero);
}
$sinGeneroB.addEventListener ("click",filtrarSinGenero);

function filtrarDesconocido () {
    let desconocido = resultados.filter ((personaje) => {
        return personaje.gender === "unknown";
    })
    cuadro (desconocido);
}
$desconocidoB.addEventListener ("click",filtrarDesconocido);



// PAGINACION

function primerPagina () {
    if (pagina > 1) {
        pagina = 1;
        usarFetch (1);
    }    
};
$primerPaginaB.addEventListener ("click",primerPagina);

function siguientePagina () {
    pagina+=1;
    usarFetch (pagina)
};
$siguienteB.addEventListener ("click",siguientePagina);

function anteriorPagina () {
    pagina-= 1;
    usarFetch (pagina)
};
$anteriorB.addEventListener ("click",anteriorPagina);

function ultimaPagina () {
    if (pagina < informacion.pages) {
        pagina = informacion.pages
        usarFetch (pagina);
    }
};
$ultimaPaginaB.addEventListener ("click",ultimaPagina);