let today = new Date();
document.getElementById("date").textContent = today.toDateString();

/* get my pokemon data from localstorage*/
const pokemonData = localStorage.getItem('pokemonData')?
 JSON.parse(localStorage.getItem('pokemonData')) : [];

 /* select html elements */
const pokemonCount = document.getElementById('pokemonCount');
/* find paragraph where pokemon count will appear */

const countButton = document.getElementById('countButton');
/* find the count my pokemon button*/

/*count pokemon button */
countButton.addEventListener('click', function() {
    pokemonCount.textContent = "You have " + pokemonData.length + " Pokémon in your catalogue!";
});

const creator = {
    name: "Tamara Purcell",
    number:"20112035",
    course: "Creative Computing",
};

const creatorinfo = document.getElementById('creatorinfo');

creatorinfo.insertAdjacentHTML(
    "beforeend",
    `<p>My name is ${creator.name} !</p>
    <p>My student number is ${creator.number}</p>
     <p>I am studying ${creator.course}.</p>
`);