let today = new Date(); /* today date */
document.getElementById("date").textContent = today.toDateString();

/* welcome alert pop up*/
alert("Welcome to my Pokémon Data Storage Website!" + "❤️");

 const factButton = document.getElementById('factButton');
factButton.addEventListener('click', pokemonFact);

function pokemonFact(){ 
        const facts= [
            "Rhydon was the first ever Pokémon to be designed and programmed into the game.",
            "The Pokémon franchise has sold over 515 million copies of its games worldwide.",
            "The Pokémon anime has been running for over 2 decades and has over 1,000 episodes.",
            "The Pokémon franchise has a VERY popular trading card game that has been around since 1996.",
            "Eevee has the most evolutions of any Pokémon, with eight different forms. (my favourite is Espeon <3)",
            "Fact! I'm obsessed with Pokémon :)",
            "The orignal Pokémon mascot was Clefairy, not Pikachu.",
            "The Pokémon franchise has a mobile game called Pokémon Go, which I am addicted to."
        ]; /* selecting a random fact from my array*/
        let randomFact = facts[Math.floor(Math.random() * facts.length)];
       document.getElementById("pokemonFact").innerHTML = randomFact;
    }
