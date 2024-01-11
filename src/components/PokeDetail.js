import React from "react";
import NoPokemon from "./NoPokemon";
import PokemonType from "./PokemonType";
import roateball from "../assets/images/pokeball-icon.png";

const PokeDetail = ({ pokeMon }) => {
  console.log("Detail Page Pokemon:", pokeMon);
  // const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   const shiftRight = () => {
  //     setTimeout(setToggle(true), 3000);
  //   };
  //   shiftRight();

  //   clearTimeout(shiftRight);
  // }, []);

  if (Object.keys(pokeMon).length !== 0) {
    const statTotal = pokeMon.stats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return (
      <div className="grid gap-y-1 fixed p-5 mt-16 lg:w-[400px] md:w-[300px]">
        <div className="flex flex-col justify-center items-center place-self-center">
          <img
            src={roateball}
            alt="roate-ball"
            className="animate-spin top-[400px] fixed z-1 w-32 h-32"
          />
        </div>
        <div
          id="poke-info"
          // className={`relative bg-white border rounded-md flex flex-col items-center min-h-[700px] p-2 gap-y-4 z-2 transition duration-500
          // ${toggle ? "translate-x-[500px]" : "-translate-x-[500px]"}  `}

          className="relative bg-white border rounded-md flex flex-col items-center min-h-[800px] p-2 gap-y-4 z-2 transition duration-500"
        >
          <img
            src={pokeMon.imgUrl}
            alt={pokeMon.name}
            className="absolute lg:-top-28 lg:w-36 lg:h-36 md:w-32 md:h-32 md:-top-28"
          />
          <div className="mt-12">
            <p className="font-semibold text-sm text-center">N°{pokeMon.id}</p>
            <p className="text-center font-bold text-pokeNameColor capitalize">
              {pokeMon.name}
            </p>
          </div>

          <div className="flex justify-center items-center gap-1">
            {pokeMon.types.map((type, index) => (
              <PokemonType key={index + "type"} type={type.type.name} />
            ))}
          </div>

          <div>
            <p className="text-center font-bold">Pokedex Entry</p>
            <p className="text-center">{pokeMon.flavorText}</p>
          </div>

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col justify-center items-center grow">
              <p className="text-center font-bold">Height</p>
              <span className="text-center rounded-2xl bg-gray-200 lg:w-40 md:w-32 sm:w-full leading-loose">
                {pokeMon.height}
              </span>
            </div>

            <div className="flex flex-col justify-center items-center grow">
              <p className="text-center font-bold">Weight</p>
              <span className="text-center rounded-2xl  bg-gray-200 lg:w-40 md:w-32 sm:w-full leading-loose">
                {pokeMon.weight}
              </span>
            </div>
          </div>

          <div>
            <p className="text-center font-bold">Abilities</p>
            <div className="flex flex-row justify-center items-center gap-x-1">
              {pokeMon.abilities.map((ability) => {
                return (
                  <div
                    className="grow text-center capitalize rounded-[30px] bg-gray-200 p-2"
                    key={ability}
                  >
                    {ability}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-center font-bold">Stats</p>
            <div className="grid grid-cols-7 gap-3 h-20">
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-rose-700 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  HP
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[0]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-orange-400 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  ATK
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[1]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-yellow-400 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  DEF
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[2]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-sky-300 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  SpA
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[3]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-lime-400 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  SpD
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[4]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-gray-200 p-1">
                <div className="rounded-[50%] bg-pink-300 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  SPD
                </div>
                <h2 className="text-sm font-bold">{pokeMon.stats[5]}</h2>
              </div>
              <div className="flex flex-col justify-between items-center rounded-[50px]  bg-slate-600 p-1">
                <div className="rounded-[50%] bg-slate-500 text-xs text-white font-bold w-8 h-8 flex justify-center items-center">
                  ToT
                </div>
                <h2 className="text-sm font-bold">{statTotal}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid gap-y-1 p-5 fixed mt-16 lg:w-[400px] md:w-[300px]">
        <NoPokemon />
      </div>
    );
  }
};

export default PokeDetail;
