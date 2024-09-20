import React, { useEffect, useState } from "react";

let fruits = [
  "banana",
  "apple",
  "orange",
  "Mango",
  "Pinapple",
  "Jack fruit",
  "watemelon",
  "Strawberry",
];
export default function Search() {
  const [filteredFrits, setFilteredFruits] = useState(fruits);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    if (searchParams == "") {
      setFilteredFruits(fruits);
    } else {
      handleFilter();
    }
  }, [searchParams]);

  const handleFilter = () => {
    const filterDetail = filteredFrits.filter((fruit) => {
      console.log(fruit, searchParams);
      return fruit.toLowerCase().includes(searchParams.toLowerCase());
    });
    console.log(filterDetail);
    setFilteredFruits(filterDetail);
  };
  return (
    <div style={{ padding: 10, textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search"
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />
      {filteredFrits.map((fruit) => (
        <div style={{ padding: 3 }}>{fruit}</div>
      ))}
    </div>
  );
}
