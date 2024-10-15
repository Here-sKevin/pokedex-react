import { usePokemonContext } from "../../shared/context/PokemonContext";


const PokemonPage: React.FC = () => {
  const { value, setValue } = usePokemonContext();
    return(
      <div>{value}</div>
    )
}

export default PokemonPage;