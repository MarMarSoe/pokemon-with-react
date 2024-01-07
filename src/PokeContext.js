import React from "react";

const PokeContext = React.createContext({
  pokeInfo: {},
  setPokeInfo: () => {},
});

export default PokeContext;
