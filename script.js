document.getElementById("searchPokemon").addEventListener("click", () => {
    const name = document.getElementById("pokemonName").value.toLowerCase().trim();
    const pokemonDiv = document.getElementById("pokemon");
    const errorMsg = document.getElementById("errorMsg");

    if (!name) {
        errorMsg.textContent = "ポケモン名を入力してください";
        pokemonDiv.innerHTML = "";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) throw new Error("ポケモンが見つかりません");
            return response.json();
        })
        .then(data => {
            errorMsg.textContent = "";
            pokemonDiv.innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>高さ：${data.height}</p>
                <p>重さ：${data.weight}</p>
                <p>タイプ：${data.types.map(t => t.type.name).join(", ")}</p>
            `;
        })
        .catch(error => {
            pokemonDiv.innerHTML = "";
            errorMsg.textContent = error.message;
        });
});
