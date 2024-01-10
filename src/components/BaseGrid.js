import React, { useState } from "react";
import Pokelist from "./PokeList";
import PokeDetail from "./PokeDetail";
import PokeContext from "../PokeContext";

const BaseGrid = () => {
  const [pokeInfo, setPokeInfo] = useState({});
  // const PokeContext = createContext({
  //   pokeInfo: {},
  //   setPokeInfo: () => {},
  // });
  const value = { pokeInfo, setPokeInfo };

  return (
    <PokeContext.Provider value={value}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex flex-row flex-grow">
          <div className="basic-full">
            <Pokelist />
          </div>
          <div className="basic-full">
            <PokeDetail pokeMon={pokeInfo} />
          </div>
        </div>
      </div>
    </PokeContext.Provider>
  );
};

export default BaseGrid;
