import axios from "axios";

type Props = {
    setData: (d:[]) => void;
    setLoading: (b:boolean) => void;
}

type PokemonProps = {
  indexp: number,
    setPokemonData: (data: object) => void;
    setToggle: (b: boolean) => void;
}

export const fetchData = async ({setData, setLoading} : Props) => {
    try {
      await axios.get("https://pokeapi.co/api/v2/pokedex/2/")
      .then(function(response){
        setData(response.data.pokemon_entries)
        console.log(response.data.pokemon_entries)
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function(){
        setLoading(false)
      });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  export const fetchPokemon = async ({indexp, setPokemonData, setToggle} : PokemonProps) => {
    try {
      await axios.get("https://pokeapi.co/api/v2/pokemon/"+indexp)
      .then(function(response){
        setPokemonData(response.data)
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function(){
        setToggle(true)
      });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };