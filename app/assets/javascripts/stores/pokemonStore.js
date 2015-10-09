(function(root) {
  'use strict';
  var _pokemons = [];
  var CHANGE_EVENT = 'change';
  var POKEMON_DETAIL_CHANGE_EVENT = 'pokemonDetailChange';

  root.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _pokemons.slice();
    },
    addHandler: function(eventName, handler) {
      this.on(eventName, handler);
    },
    removeHandler: function(eventName, handler) {
      this.removeListener(eventName, handler);
    },
    change: function(eventName) {
      this.emit(eventName);
    },
    find: function(id) {
      var findPokemon = {};
      _pokemons.forEach(function(pokemon, idx) {
        if( pokemon.id === id) { findPokemon = pokemon; }
      });
      return findPokemon;
    },
    dispatcherID: pokemonDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case 'received':
          root.PokemonStore.addPokemon(payload);
          root.PokemonStore.change(CHANGE_EVENT);
          break;
        case 'one_received':
          root.PokemonStore.replacePokemon(payload);
          root.PokemonStore.change(POKEMON_DETAIL_CHANGE_EVENT);
          break;
      }
    }),
    addPokemon: function(payload) {
      _pokemons = payload.pokemons;
    },
    replacePokemon: function(payload) {
      _pokemons.forEach(function(pokemon, idx) {
        if(pokemon.id === payload.pokemons.id) {
          _pokemons[idx] = payload.pokemons;
        }
      });
      // debugger;
    }
  });



}(this));
