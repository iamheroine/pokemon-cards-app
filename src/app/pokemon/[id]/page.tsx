import fetchPokemonData from "@/api/fetchPokemonData";
import Link from "next/link";
import Image from "next/image";

const PokemonDetailPage = async ({ params }: { params: { id: number } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <div>
      <div>
        <h1>{pokemon.korean_name}</h1>
        <p>No. {pokemon.id}</p>
      </div>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.korean_name}
        width={200}
        height={200}
      />
      <p>이름: {pokemon.korean_name}</p>
      <div>
        <span>키: {pokemon.height / 10} m </span>
        <span>무게: {pokemon.weight / 10} kg </span>
      </div>
      {/* <div>
        <p>타입: </p>
        <div></div>
        <p>특성: </p>
        <div></div>
      </div> */}
      <p>기술: </p>
      <div>
        {pokemon.moves.map((move) => (
          <span key={move.move.name}>{move.move.korean_name} </span>
        ))}
      </div>
      <Link href="/">닫기</Link>
    </div>
  );
};

export default PokemonDetailPage;
