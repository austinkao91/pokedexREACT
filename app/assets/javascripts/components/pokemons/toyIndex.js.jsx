/* global React */

var ToyIndex = React.createClass({
  render: function(){
    if(this.props.pokemon.toys === undefined) {
      return (
        <ul></ul>
      );
    }
    return (
      <ul>
      {
        this.props.pokemon.toys.map(function(toy, idx) {
          return <ToyIndexItem key={idx} toy={toy} pokemon={this.props.pokemon} />;
        }.bind(this))
      }
      </ul>
    );
  }
});

var ToyIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showToy: function () {
    var showURL = "/toys/";
    showURL = "pokemon/" + this.props.pokemon.id + "/toys/" + this.props.toy.id;
    this.history.pushState(null, showURL);
  },
  render: function(){
    return (
      <li onClick={this.showToy} className="toy-list-item">
        {this.props.toy}
      </li>
    );
  }
});

var ToyDetail = React.createClass({
  getInitialState: function() {
    return { toy: this.getStateFromStore() };
    },
    componentWillMount: function () {
      PokemonStore.addHandler(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT,
                              this.updatePokemon);

    },
    updatePokemon: function () {
      this.setState({toy: this.getStateFromStore()});
    },
    getStateFromStore: function(){
      var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
      var selectedToy = {};
      pokemon.toys = pokemon.toys || [];
      pokemon.toys.forEach(function(toy){
        if(toy.id === this.props.params.toyId) { selectedToy = toy; }
      });
      return selectedToy;
    },
    componentWillReceiveProps: function (nextProps) {
      Api_util.getOne(parseInt(nextProps.params.toyId));
    },
  render: function() {
    if (this.state.toy === undefined) {
      return <div></div>;
    }

    return (
      <div className="detail">
        <img src={this.state.toy.image_url} />
        <ul>
          {
            Object.keys(this.state.toy).map( function (property, idx) {
                return <li key={idx}> {property} {": "} {this.state.toy[property]} </li>;
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
