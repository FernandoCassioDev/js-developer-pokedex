const PokemonList = document.getElementById('PokemonList')

PokemonList.addEventListener('click', (event) => {
    const clickedPokemon = event.target.closest('.pokemon');
    if (clickedPokemon) {
        const pokemonNumber = clickedPokemon.querySelector('.number').textContent.slice(1);
        exibirDetalhesDoPokemon(pokemonNumber);
    }
})


function exibirDetalhesDoPokemon(pokemonNumber){
    pokeApi.getPokemonDetailByNumber(pokemonNumber)
    .then((pokemon) => {
        console.log(pokemon)
    })
}