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
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <Pokelist />
        </div>
        <div>
          <PokeDetail pokeMon={pokeInfo} className="z-2" />
        </div>
      </div>
    </PokeContext.Provider>
  );
};

export default BaseGrid;
