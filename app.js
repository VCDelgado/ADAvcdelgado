let $cuadro = document.getElementById ("cuadro")
let todosPersonajes = [];
let $siguienteB = document.getElementById ("siguiente");
let $anteriorB = document.getElementById ("anterior")
let pagina = 1;
let $mujerB = document.getElementById("mujer")

function cuadro (resultados) {
    $cuadro.innerHTML = "";
    for (let i=0; i<resultados.length; i++) {
        $cuadro.innerHTML +=  `<div class="cuadrodatos">
                                <img src=${resultados[i].image} alt="">
                                <p> <span class="detalle"> Nombre: </span> ${resultados[i].name}</p>
                                <p> <span class="detalle"> Género: </span> ${resultados[i].gender}</p>
                                <p><span class="detalle"> Especies: </span> ${resultados[i].species}</p>
                                <p><span class="detalle"> Estado: </span> ${resultados[i].status}</p>
                                <p><span class="detalle"> Origen: </span> ${resultados[i].origin.name}</p>
                                <p><span class="detalle"> Locación: </span> ${resultados[i].location.name}</p>
                            </div>`
    }
    }
    


function usarFetch (numeroPagina) {
    let respuesta = fetch (`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`);
    respuesta.then((data)=> {
    return data.json ()
})
.then ((data)=> {
    let resultados = data.results;
    cuadro (resultados);
    }
)


.catch ((error) => {
    console.log (error)
});
};

usarFetch (pagina);


function filtrarMujeres () {
    let mujeres = resultados.filter ((personaje) => {
        return personaje.gender === "Female";
    })
    cuadro (mujeres);
}
$mujerB.addEventListener ("click",filtrarMujeres);

function siguientePagina () {
    pagina++
    usarFetch (pagina)
};


$siguienteB.addEventListener ("click",siguientePagina);

function anteriorPagina () {
    pagina--
    usarFetch (pagina)
};


$anteriorB.addEventListener ("click",anteriorPagina);