import React from "react";

const PokeListContext = React.createContext({
  pokelist: [],
  setPokeList: () => {},
});

export default PokeListContext;
