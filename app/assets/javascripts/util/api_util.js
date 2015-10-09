Api_util = {
  fetch: function() {
    $.ajax({
      url: 'api/pokemon',
      method: 'get',
      success: function(data) {
        ApiActions.receiveAllPokemon(data);
      }
    });
  },
  getOne: function(id) {
    // debugger;
    $.ajax({
      url: 'api/pokemon/' + id,
      method: 'get',
      success: function(data) {
        ApiActions.receivePokemon(data);
      }
    });
  }

};
