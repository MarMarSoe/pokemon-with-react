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
      <div className="max-w-full p-6 mx-auto">
        <div className="flex flex-row flex-grow">
          <div >
            <Pokelist />
          </div>
          <div>
            <PokeDetail pokeMon={pokeInfo} />
          </div>
        </div>
      </div>
    </PokeContext.Provider>
  );
};

export default BaseGrid;
