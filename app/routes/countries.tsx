import { Link } from "react-router";
import type { Route } from "./+types/countries";
import type { Country } from "~/types";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,languages"
  );
  const data = await res.json();

  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: Country) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();

    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      <h2>Countries</h2>
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.currentTarget.value)}
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <ul>
        {filteredCountries.map((country: Country, key: number) => (
          <li key={key}>
            <Link to={`/countries/${country.name.common}`}>
              {country.name.common}
            </Link>
            <div>
              Region: {country.region} | Population: {country.population}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
