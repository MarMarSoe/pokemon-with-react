
const PokemonType = ({ type }) => {
  const typeColors = {
    normal: "bg-normal",
    fighting: "bg-fighting",
    flying: "bg-flying",
    poison: "bg-poison",
    ground: "bg-ground",
    rock: "bg-rock",
    bug: "bg-bug",
    ghost: "bg-ghost",
    steel: "bg-steel",
    fire: "bg-fire",
    water: "bg-water",
    grass: "bg-grass",
    electric: "bg-electric",
    psychic: "bg-psychic",
    ice: "bg-ice",
    dragon: "bg-dragon",
    dark: "bg-dark",
    fairy: "bg-fairy",
    shadow: "bg-shadown",
  };

  const bgColor = typeColors[type];

  return (
    <p
      className={`text-center text-sm w-12 rounded-md ${bgColor} capitalize font-semibold`}
    >
      {type}
    </p>
  );
};

export default PokemonType;
