
const store = require("./redux/store.js");
const movies = require("./redux/movies.js");
const tvShows = require("./redux/tvShows.js");



store.dispatch(movies.addMovie("Blow"));
store.dispatch(movies.addMovie("Hijack"));
store.dispatch(movies.addMovie("Frontier"));
store.dispatch(movies.addMovie("Friday"));


store.dispatch(tvShows.addTvShow("Beavis & ButtHead"));
store.dispatch(tvShows.addTvShow("Nowheres Land"));
store.dispatch(tvShows.addTvShow("Geek Squad"));
store.dispatch(tvShows.addTvShow("ShameLess"));
console.log(store)

//REMOVE MOVIE
store.dispatch(movies.removeMovie("Frontier"));
store.dispatch(movies.removeMovie("Hijack"));

//REMOVE TV SHOW
store.dispatch(tvShows.removeTvShow("Beavis & ButtHead"));

//GET ALL MOVIES
store.dispatch(movies.getAllMovies());

//GET ALL TV SHOWS
store.dispatch(tvShows.getAllTvShows());