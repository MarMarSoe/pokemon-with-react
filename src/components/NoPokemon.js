import noPokemon from "../assets/images/no-pokemon-selected-image.png";

const NoPokemon = () => {
  return (
    <div className="relative bg-white border rounded-md flex flex-col justify-center items-center min-h-[700px]">
      <img
        src={noPokemon}
        alt="no-poke-selected"
        className="absolute -top-24 w-28 h-36 "
      />
      <p className="text-gray-500 flex flex-col justify-center">
        Select a Pokemon to display here.
      </p>
    </div>
  );
};

export default NoPokemon;
