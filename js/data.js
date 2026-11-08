let today = new Date();
document.getElementById("date").textContent = today.toDateString();

/* get pokemon records from localstorage, empty array created if it doesnt exist yet*/
let pokemonData = localStorage.getItem('pokemonData') ?
    JSON.parse(localStorage.getItem('pokemonData')) : [];

/* selcting html elements */
const table = document.querySelector('table');
const toggle = document.getElementById('toggle');
const dialog = document.getElementById('addPokemonDialog');
const form = document.getElementById('addPokemonForm');
const searchForm = document.getElementById('searchForm');

/* display pokemon records in table */
const displayPokemonRecords= () => {
    table.textContent = ""; /* clear table before displaying again*/
    
        table.insertAdjacentHTML(
            "beforeend",
            `<tr>
            <th>Name</th>
            <th>Image</th>
            <th>Pokedex Number</th>
            <th>Type</th>
            <th>Generation</th>
            <th>Level</th>
            <th>Shiny</th>
            <th>Legendary</th>
            <th>Delete</th>
        </tr>`
        );
         /*go through every pokemon in array */
    pokemonData.forEach((pokemon) => {
        table.insertAdjacentHTML(
            "beforeend",
            `<tr>
                <td>${pokemon.name.toUpperCase()}</td>
                <td><img src="${pokemon.image}" width="100"></td>
                <td>${pokemon.pokedexNumber}</td>
                <td>${pokemon.type}</td>
                <td>${pokemon.generation}</td>
                <td>${pokemon.level}</td>
                <td>${pokemon.shiny ? "Yes" : "No"}</td>
                <td>${pokemon.legendary ? "Yes" : "No"}</td>
                <td><button data-id="${pokemon.pokedexNumber}">Delete</button></td>
            </tr>`
            );
    });
}

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    /* get pokemon name entered in search box*/
    let name = searchForm.elements.searchName.value;

    let filtered = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase() === name.toLowerCase()
    );

    table.textContent = "";

    filtered.forEach((pokemon) => {
        table.insertAdjacentHTML (
            "beforeend",
            `<tr>
             <td>${pokemon.name.toUpperCase()}</td>
                <td><img src="${pokemon.image}" width="100"></td>
                <td>${pokemon.pokedexNumber}</td>
                <td>${pokemon.type}</td>
                <td>${pokemon.generation}</td>
                <td>${pokemon.level}</td>
                <td>${pokemon.shiny ? "Yes" : "No"}</td>
                <td>${pokemon.legendary ? "Yes" : "No"}</td>
                <td><button data-id="${pokemon.pokedexNumber}">Delete</button></td>
            </tr>`
        );
    });
});

/* open and close the dialog */
toggle.addEventListener('click', function() {
document.getElementById("addPokemonDialog").showModal();
});

const close =   document.getElementById('close');
close.addEventListener('click', function() {
document.getElementById("addPokemonDialog").close();
});

/*new pokemon records*/
const addPokemon = (evt) => {
    evt.preventDefault(); /* stop form from refreshing page */

    /* get name of image file selected*/
    let image = form.elements.file.files[0].name;
    let newimage = "images/" + image; /*add the images folder to the image filename */

    let newPokemon = {
        name: form.elements.name.value, /* get pokemon name from the form */
        pokedexNumber: form.elements.pokedexNumber.value,
        type: form.elements.type.value,
        generation: form.elements.generation.value,
        level: form.elements.level.value,
        shiny: form.elements.shiny.checked,
        legendary: form.elements.legendary.checked,
        image: newimage
    };

    pokemonData.push(newPokemon); /*add new pokemon to array */

    localStorage.setItem('pokemonData', JSON.stringify(pokemonData));
 /* convert array into text so it cna be saved in localstorage*/

    form.reset(); /*clear form after adding pokemon */
    dialog.close(); 
    displayPokemonRecords(); /* update table to show new pokemon*/
};

form.addEventListener('submit', addPokemon); /* runs when form is submitted */

/*delete pokemon records*/

table.addEventListener("click", (evt) => {
    if (evt.target.matches("button")){
    let  deleteRec = pokemonData.findIndex( /* search array for pokemon matching buttons data id, return position of that pokemon in the array */
            (pokemon) => pokemon.pokedexNumber === evt.target.dataset.id
        );
        pokemonData.splice(deleteRec, 1); /*remove one pokemon from the array at that position */

        localStorage.setItem("pokemonData", JSON.stringify(pokemonData));

        displayPokemonRecords();

    }
    
});

    displayPokemonRecords();

