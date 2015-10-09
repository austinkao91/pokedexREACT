/* global React */
/* global PokemonStore */
/* global Api_util */
/* global PokemonIndexItem */

var Index = React.createClass({
  render: function() {
    return (
      <div className="pokemon-index">
        {
          <PokemonsIndex />
        }
        { this.props.children }
      </div>
    );
  }
});

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },
  setPokemon: function () {
    this.setState({pokemons: PokemonStore.all()});
  },
  componentDidMount: function () {
    PokemonStore.addHandler(PokemonConstants.CHANGE_EVENT,
                            this.setPokemon);
    Api_util.fetch();
  },
  componentWillUnmount: function() {
    PokemonStore.removeHandler(PokemonConstants.CHANGE_EVENT,
                               this.setPokemon);
  },
  render: function() {
    return (
      <div className="pokemonsindex">
        <ul>
          {
            this.state.pokemons.map(function(pokemon, idx) {
              return <PokemonIndexItem pokemon={pokemon} key={idx}/>;
            })
          }
        </ul>
      </div>

    );
  }
});
