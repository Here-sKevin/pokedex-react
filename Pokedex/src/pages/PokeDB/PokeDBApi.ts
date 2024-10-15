import axios from "axios";
import { PokemonDto } from "./interface/PokemonDto";

type Props = {
    setData: (d:[]) => void;
    setLoading: (b:boolean) => void;
}

export const fetchData = async ({setData, setLoading} : Props) => {
    try {
      await axios.get("https://pokeapi.co/api/v2/pokedex/2/")
      .then(function(response){
        const requests = response.data.pokemon_entries.map(item => {
            return axios.get("https://pokeapi.co/api/v2/pokemon/"+item.entry_number);
        });
        return Promise.all(requests);
      })
      .then(function(responses) {
        const data = responses.map(response => {
            return new PokemonDto(response.data)
        });
        setData(data)
        console.log('All responses:', data);
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
