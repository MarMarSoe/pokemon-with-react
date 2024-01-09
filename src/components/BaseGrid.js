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
      <div className="flex sm:flex-row xs:flex-col gap-x-2 p-6 ">
        <div className="sm:basic-2/3  xs:w-full ">
          <Pokelist />
        </div>
        <div className="sm:basic-1/3 xs:w-full">
          <PokeDetail pokeMon={pokeInfo} />
        </div>
      </div>
    </PokeContext.Provider>
  );
};

export default BaseGrid;
