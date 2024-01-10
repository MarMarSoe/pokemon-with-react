import React, { useContext, useEffect, useState } from "react";
import PokemonServices from "../services/PokemonServices";
import PokemonType from "./PokemonType";
import PokeContext from "../PokeContext";
import PokeListContext from "../PokeListContext";
import Search from "./Search";

export default function Pokelist() {
  const [pokelist, setPokeList] = useState([]);
  const value = { pokelist, setPokeList };

  const { pokeInfo, setPokeInfo } = useContext(PokeContext);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const result = await PokemonServices.fetchPokemon();
        console.log("The result is ", result);
        setPokeList(result);
      } catch (error) {
        console.log("API error", error);
      }
    };

    getPokemonList();
  }, []);

  const showPokemon = async (pokeId) => {
    try {
      const result = await PokemonServices.fetchPokeInfo(pokeId);
      console.log("In PokeList >>>>> Pokemon Info API Response:", result);
      setPokeInfo(result);
      console.log("In PokeList >>>>> Pokemon Info of State:", pokeInfo);
    } catch (error) {
      console.log("API error", error);
    }
  };

  return (
    <PokeListContext.Provider value={value}>
      <div className="grid gap-y-12 w-full">
        <div>
          <Search />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 place-content-stretch">
          {pokelist.map((poke) => (
            <div
              key={poke.id + "poke"}
              className="relative flex justify-center items-center flex-col gap-y-2 p-2 rounded-xl border shadow-md bg-white w-[200px] hover:shadow-lg group"
              onClick={() => showPokemon(poke.id)}
            >
              <img
                src={poke.url}
                alt={poke.name}
                className="absolute -top-12 w-20 h-20 transition duration-300 group-hover:scale-125"
              />
              <div className="mt-8">
                <p className="font-bold text-sm text-center">N°{poke.id}</p>
                <p className=" text-center font-bold text-pokeNameColor">
                  {poke.name}
                </p>
              </div>

              <div className="flex justify-center items-center gap-1">
                {poke.types.map((type, index) => (
                  <PokemonType key={index + "type"} type={type.type.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PokeListContext.Provider>
  );
}
