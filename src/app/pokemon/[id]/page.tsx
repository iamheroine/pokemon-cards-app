import fetchPokemonData from "@/api/fetchPokemonData";
import Link from "next/link";
import Image from "next/image";

const PokemonDetailPage = async ({ params }: { params: { id: number } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl p-8">
      <div className="flex flex-col items-center">
        <div className="divider divider-default">
          <h1 className="mt-1 text-4xl leading-tight font-medium text-black">
            {pokemon.korean_name}
          </h1>
          <p className="text-gray-500 text-lg">No. {pokemon.id}</p>
        </div>
        <Image
          className="mt-4"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.korean_name}
          width={200}
          height={200}
        />
        <p className="mt-4 text-2xl font-semibold text-gray-900">
          이름: {pokemon.korean_name}
        </p>
        <div className="mt-4 text-gray-500 text-lg">
          <span className="block">키: {pokemon.height / 10} m </span>
          <span className="block">무게: {pokemon.weight / 10} kg </span>
        </div>
        {/* <div>
          <p>타입: </p>
          <div></div>
          <p>특성: </p>
          <div></div>
        </div> */}
        <p className="mt-4 text-2xl font-semibold text-gray-900">기술: </p>
        <div className="mt-2 flex flex-wrap justify-center space-y-1">
          {pokemon.moves.map((move) => (
            <span
              key={move.move.name}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
            >
              {move.move.korean_name}
            </span>
          ))}
        </div>
        <Link
          href="/"
          className="mt-4 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          닫기
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
