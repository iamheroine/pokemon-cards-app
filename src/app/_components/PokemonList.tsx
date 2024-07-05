"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "@/types/pokemonType";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get("/api/pokemons");
        setPokemons(response.data);
      } catch (error) {
        console.log("데이터를 불러오지 못했습니다.");
      }
    };
    getPokemonData();
  }, []);

  return (
    <div className="px-40 md:px-64 lg:px-80 xl:px-96 py-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-1">
        {pokemons.map((pokemon: Pokemon) => (
          <div
            className="card bg-base-100 w-full max-w-[12rem] mx-auto shadow-xl border-gray-100 text-black transition-transform transform hover:scale-105 hover:shadow-2xl"
            key={pokemon.id}
          >
            <Link href={`/pokemon/${pokemon.id}`}>
              <figure className="w-full h-40 pt-8 pl-4 pr-4 flex justify-center items-center">
                <Image
                  className="w-auto h-full object-contain"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.korean_name}
                  width={150}
                  height={150}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{pokemon.korean_name}</h2>
                <h3 className="text-sm text-gray-400">{pokemon.name}</h3>
                <p className="text-sm">Pokédex No.{pokemon.id}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}