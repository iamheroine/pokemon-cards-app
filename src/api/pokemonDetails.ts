import axios from "axios";

const fetchPokemonData = async (id: number) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/api/pokemons/${id}`
    );
  } catch (error) {
    console.log("데이터를 불러오지 못했습니다.");
  }
};

export default fetchPokemonData
