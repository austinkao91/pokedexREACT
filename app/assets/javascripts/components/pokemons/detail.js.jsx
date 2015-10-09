/* global React */
/* global PokemonConstants */
/* global PokemonStore */

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return { pokemon: this.getStateFromStore() };
  },
  componentWillMount: function () {
    PokemonStore.addHandler(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT,
                            this.updatePokemon);

  },
  updatePokemon: function () {
    this.setState({pokemon: this.getStateFromStore()});
  },
  getStateFromStore: function(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },
  componentWillReceiveProps: function (nextProps) {
    Api_util.getOne(parseInt(nextProps.params.pokemonId));
  },
  render: function() {
    if (this.state.pokemon === undefined) {
      return <div></div>;
    }

    return (
      <div className="detail">
        <img src={this.state.pokemon.image_url} />
        <ul>
          {
            Object.keys(this.state.pokemon).map( function (property, idx) {
              if (property !== "toys") {
                return <li key={idx}> {property} {": "} {this.state.pokemon[property]} </li>;
              }
            }.bind(this))
          }
          <ToyIndex pokemon={this.state.pokemon}/>
        </ul>
      </div>
    );
  }
});
