"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get("/api/pokemons");
        // console.log(response.data);
        setPokemons(response.data);
      } catch (error) {
        console.log("데이터를 불러오지 못했습니다.");
      }
    };
    getPokemonData();
  }, []);

  return (
    <section>
      {pokemons.map((pokemon) => (
        <div className="card bg-base-100 w-36 shadow-xl" key={pokemon.id}>
          {/* <Link href={`/pokemon/${pokemon.id}`}> */}
          <div className="card-body">
            <h2 className="card-title">{pokemon.korean_name}</h2>
            <h3>{pokemon.name}</h3>
            <p>Pokédex No.{pokemon.id}</p>
          </div>
          <figure>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              width={96}
              height={96}
            />
          </figure>
          {/* </Link> */}
        </div>
      ))}
    </section>
  );
}
