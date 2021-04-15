import { makeAutoObservable, action, flow } from "mobx";

class PokedexStore {
  pokemon = [];

  constructor() {
    makeAutoObservable(this, {
      fetchPokemon: action.bound,
    });
  }

  fetchPokemon = flow(function* () {
    const response = yield fetch("https://raw.githubusercontent.com/Laboratoria/SCL008-data-lovers/master/src/data/pokemon/pokemon.json")
      .then(res => res.json());
    this.pokemon = response.pokemon;
  });

}

export default new PokedexStore();