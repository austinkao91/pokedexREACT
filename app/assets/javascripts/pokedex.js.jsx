/* global React */
/* global ReactRouter */
/*global Index */
/*global PokemonDetail */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;



$(document).ready(function() {
  React.render(
    <Router>
      <Route path="/" component={Index}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}></Route>
        <Route path="pokemon/:pokemonId/toys/:toyId"
               components={{pokemon: PokemonDetail, toy: ToyDetail}}></Route>
      </Route>
    </Router> ,
    document.getElementById('pokedex')
  );
});
