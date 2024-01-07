import PokemonResponseModel from "./PokemonResponseModel";
import StringHelpers from "../common/helpers/StringHelpers";
import PokemonDetailResponseModel from "./PokemonDetailResponseModel";

const PokemonServices = {
  fetchPokemon: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=45")
      .then((response) => response.json())
      .then((json) => json.results)
      .then(async (data) => {
        return await Promise.all(
          data.map((e) => {
            return fetch(e.url)
              .then((response) => response.json())
              .then((json) => {
                return json;
              });
          })
        );
      });

    const pokemonList = [];
    response.forEach((pokemon, index) => {
      const pk = new PokemonResponseModel(
        pokemon.id,
        StringHelpers.toUpperCase(pokemon.name),
        pokemon.sprites.front_default,
        pokemon.types
      );
      pokemonList.push(pk);
    });
    return pokemonList;
  },
  fetchPokeInfo: async (id) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    const species = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + id
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    const pokemonInfo = new PokemonDetailResponseModel(
      response.id,
      response.name,
      response.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default,
      response.types,
      species.flavor_text_entries[0].flavor_text,
      response.height,
      response.weight,
      response.abilities,
      response.stats
    );

    return pokemonInfo;
  },
};

export default PokemonServices;
