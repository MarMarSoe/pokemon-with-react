import { useContext, useRef } from "react";
import SearchLogo from "../assets/images/pokeball-icon.png";
import PokeListContext from "../PokeListContext";
import PokemonServices from "../services/PokemonServices";

const Search = () => {
  const inputRef = useRef(null);
  const { pokelist, setPokeList } = useContext(PokeListContext);
  console.log("Pokemons in Search :", pokelist);

  const searchPokeList = [];
  const search = async () => {
    const result = await PokemonServices.fetchPokemon();
    if (result.length !== 0) {
      result.forEach((pokemon) => {
        if (
          pokemon.name
            .replace("-", "")
            .toLowerCase()
            .includes(inputRef.current.value.toString().toLowerCase())
        ) {
          searchPokeList.push(pokemon);
        }
      });
    }
    console.log("Searched Pokemon List :", searchPokeList);

    setPokeList(searchPokeList);
  };

  const handlePokemonSearch = async () => {
    const pokeSearch = () => {
      setTimeout(search, 1000);
    };
    pokeSearch();
    clearTimeout(pokeSearch);
  };

  return (
    <div className="flex flex-row justify-between  h-20 relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search your Pokemon"
        className="absolute left-1 w-full h-16 p-3 rounded-[20px] shadow border-0 outline-none"
        onKeyDown={handlePokemonSearch}
      />
      <div className="absolute right-2 top-4 rounded-lg shadow-xl  shadow-red-600/50 flex justify-center items-center bg-red-600 p-1">
        <img
          src={SearchLogo}
          alt="search-logo"
          className="w-6 h-6 flex items-center animate-spin"
        />
      </div>
    </div>
  );
};

export default Search;
