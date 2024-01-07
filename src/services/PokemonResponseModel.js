import PokemonTypeModel from "./PokemonTypeModel";

export default class PokemonResponseModel {
  constructor(id, name, url, types) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.types = types.map(
      (type) => new PokemonTypeModel(type.slot, type.type)
    );
  }
}
