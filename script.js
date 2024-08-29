
const contenedorElemento = document.querySelector("#contenedor-elementos")
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const consultasBarra = document.getElementById("barra-consultas");

const urlSTAR = {
    "films": "https://swapi.py4e.com/api/films/",
    "people": "https://swapi.py4e.com/api/people/",
    "planets": "https://swapi.py4e.com/api/planets/",
    "species": "https://swapi.py4e.com/api/species/",
    "starships": "https://swapi.py4e.com/api/starships/",
    "vehicles": "https://swapi.py4e.com/api/vehicles/"
};
//*********************************************************************
async function get_data(url) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const stars = await res.json();
            console.log("Datos obtenidos:", stars.results);
            return stars;  
        } else {
            console.error("Error en la respuesta de la API:", res.status);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}
//---------------------------------------------------
// ESTA BUSQUEDA FUNCIONA A LA PERFECCION, REALIZAR UNA POR CADA UNO DE LOS CINCO PARA MOSTRAR TODAS DESPUES DE ESO FILTRAMOS
async function busqueda_personajes() {
    console.log("Inicio de la búsqueda de personajes");
    try {
        let data = await get_data(urlSTAR.people);
        var personajes = data.results
        if (personajes) {
            console.log("Personajes obtenidos:", personajes);
        } else {
            console.log("No se encontraron personajes.");
        }
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
    // AQUI SE DIBUJAN LOS ELEMENTOS CON EL FOR EACH PARA MEJOR SINTAXIS Y PORQUE ESTA MAS CHIMBA MMH
    personajes.forEach( (element) => {
        const div = document.createElement("div");
        div.classList.add("elemento");
        div.innerHTML = `
                    <h2>${element.name}</h2>
                    <p class="Altura"><strong>Altura:</strong> ${element.height}</p>
                    <p class="Masa"><strong>Masa:</strong> ${element.mass}</p>
                    <p class="Color_de_pelo"><strong>Color de pelo:</strong> ${element.hair_color}</p>
                    <p class="Color_de_piel"><strong>Color de piel:</strong> ${element.skin_color}</p>
                    <p class="Color_de_ojos"><strong>Color de ojos:</strong> ${element.eye_color}</p>
                    <p class="Año_de_nacimiento"><strong>fecha de nacimiento: </strong>${element.birth_year}</p>
                    <p class=""><strong>Genero: </strong>${element.gender}</p>
        `;
        contenedorElemento.append(div);
    })
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const per = e.currentTarget.id;
        switch (per) {
            case "personajes":
                busqueda_personajes();
                console.log ("Bandera de gay")
                const consultasPersonajes = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
                hacerConsultasBarra (consultasPersonajes)
                agregarEventoConsultas()
                break;
            case "peliculas":
                // AQUI SE HACE LA CONSULTA DE PELICULAS
                console.log("Consulta de peliculas");
                const consultasPeliculas = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
                hacerConsultasBarra (consultasPeliculas)
                agregarEventoConsultas()
                break;
            case "naves":
                // AQUI SE HACE LA CONSULTA DE NAVES
                console.log("Consulta de naves");
                const consultasNaves = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
                hacerConsultasBarra (consultasNaves)
                agregarEventoConsultas()
                break;
            case "especies":
                // AQUI SE HACE LA CONSULTA DE ESPECIES
                console.log("Consulta de especies");
                const consultasEspecies = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
                hacerConsultasBarra (consultasEspecies)
                agregarEventoConsultas()
                break;
            case "vehiculos":
                // AQUI SE HACE LA CONSULTA DE VEHICULOS
                console.log("Consulta de vehículos");
                const consultasVehiculos = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
                hacerConsultasBarra (consultasVehiculos)
                agregarEventoConsultas()
                break;
            default:
                console.log("Error en la categoría seleccionada");
        }
    });
});
function agregarEventoConsultas () {
    const botonesCategoriasConsulta = document.querySelectorAll(".boton-categoria-consulta");
    botonesCategoriasConsulta.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesCategoriasConsulta.forEach(boton => boton.classList.remove("active-consulta"));
            e.currentTarget.classList.add("active-consulta");
            console.log( e.currentTarget)
            // DE AQUI PARA ABAJO SE HACEN LAS CONSULTAS POR EL SUB ELEMENTO DE LA SUBLISTA
            // const prueba = document.createElement("div");
            // prueba.classList.add("elemento");
            // prueba.innerHTML = ""
            // prueba.innerHTML =  `
            // <h2>${e.currentTarget.id}</h2>`
            // console.log(prueba)
            // contenedorElemento.prepend(prueba)
            contenedorElemento.innerHTML = "";
            busqueda_personajes()
        });
});
}
// ESTA FUNCION HACE LAS SUBCONSULTAS DE LA PAGINA DE LA 1 A LA 4 PARA PODER REALIZAR LAS ADECUADAS, HAY QUE PERSONALIZARLA YA SEA CON UN ARRAY Y SE LE HACE FOREACH O ALGO ASI PARA PODER REALIZARLA AUTOMATICA
function hacerConsultasBarra (array){
    consultasBarra.innerHTML = ``
    array.forEach((elemento) => {
        consultasBarra.innerHTML += `
        <li>
            <button id="${elemento}" class="boton-menu-consulta boton-categoria-consulta"><span>${elemento}</span></button>
        </li>`
    })
}

busqueda_personajes()
const consultasPeliculas = ["Color de ojos", "Color de piel","Genero","Color de pelo"];
hacerConsultasBarra(consultasPeliculas);
agregarEventoConsultas()
console.log(consultasPeliculas)