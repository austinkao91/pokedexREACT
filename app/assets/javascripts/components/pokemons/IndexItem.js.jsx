/* global React */
/* global PokemonStore */
/* global Api_util */

var PokemonIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    var showURL = "pokemon/" + this.props.pokemon.id;

    this.history.pushState(null, showURL);
  },
  render: function() {
    return(
      <li onClick={this.showDetail} className={"poke-list-item"}>
        {"Name: " + this.props.pokemon.name}
        {"Type: " + this.props.pokemon.poke_type}
      </li>
    );
  }
});
