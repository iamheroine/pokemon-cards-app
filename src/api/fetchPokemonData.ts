import axios from "axios";

const fetchPokemonData = async (id: number) => {
  try {
    const apiUrl = "http://localhost:3000";
    const response = await axios.get(`${apiUrl}/api/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.log("데이터를 불러오지 못했습니다.");
  }
};

export default fetchPokemonData;
