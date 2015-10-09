ApiActions = {
  receiveAllPokemon: function(data) {
    var payload = {
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    }
    pokemonDispatcher.dispatch(payload);
  },
  receivePokemon: function(data) {
    var payload = {
      actionType: PokemonConstants.ONE_POKEMON_RECEIVED,
      pokemons: data
    }
    pokemonDispatcher.dispatch(payload);
  }
};
