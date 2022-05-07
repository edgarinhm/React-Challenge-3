import React, { useState } from "react";
import CardItem from "./components/CardItem/CardItem";
import { pokemons } from "./mock/mockedData";
import Input from "./components/Input/Input";
import "./styles.css";

export default function App() {
  const [filter, setFilter] = useState();
  const [pokemonsData, setPokemonsData] = useState(pokemons);

  const handleFilter = (e) => {
    setFilter(e.target.value.trim().toLowerCase());
    setPokemonsData(pokemons.filter((data) => data.name.includes(filter)));
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <Input onChange={handleFilter} />
      <div className="cards">
        {pokemonsData.map((data, index) => {
          return (
            <CardItem
              key={data.name + index}
              name={data.name}
              sprite={data.sprite}
            />
          );
        })}
      </div>
    </div>
  );
}
