import PokemonTypeModel from "./PokemonTypeModel";

export default class PokemonDetailResponseModel {
  constructor(
    id,
    name,
    imgUrl,
    types,
    flavorText,
    height,
    weight,
    abilities,
    stats
  ) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.types = types.map(
      (type) => new PokemonTypeModel(type.slot, type.type)
    );
    this.flavorText = flavorText;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities.map((ability) => {
      return ability.ability.name;
    });
    this.stats = stats.map((stat) => {
      return stat.base_stat;
    });
  }
}
