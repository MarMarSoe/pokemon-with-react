export default class PokemonStatsModel {
  constructor(
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    total
  ) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
    this.total = hp + attack + defense + specialAttack + specialDefense + speed;
  }
}
