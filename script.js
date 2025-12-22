document.getElementById("loadPokemon").addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
        .then(response => response.json())
        .then(data => {
            const pokemonDiv = document.getElementById("pokemon");
            pokemonDiv.innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}">
                <p>高さ：${data.height}</p>
                <p>重さ：${data.weight}</p>
            `;
        });
});
