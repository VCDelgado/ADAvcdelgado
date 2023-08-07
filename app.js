let respuesta = fetch ("https://rickandmortyapi.com/api/character");

respuesta.then((data)=> {
    return data.json ()
}).then ((data)=> {
    let resultados = data.results;
    console.log (data);
    let $div = document.getElementById("cuadro");
    

    for (let i=0; i<resultados.length; i++) {
    $div.innerHTML +=  `<div class="cuadrodatos">
                            <img src=${resultados[i].image} alt="">
                            <p> <span class="detalle"> Nombre: </span> ${resultados[i].name}</p>
                            <p> <span class="detalle"> Género: </span> ${resultados[i].gender}</p>
                            <p><span class="detalle"> Especies: </span> ${resultados[i].species}</p>
                            <p><span class="detalle"> Estado: </span> ${resultados[i].status}</p>
                            <p><span class="detalle"> Origen: </span> ${resultados[i].origin.name}</p>
                            <p><span class="detalle"> Locación: </span> ${resultados[i].location.name}</p>
                        </div>`
    }
})

.catch ((error) => {
    console.log (error)
})



