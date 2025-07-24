import type { Country } from "~/types";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();

  return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country: Country = loaderData[0];
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {country.name.common}
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Official Name:</span>{" "}
            {country.name.official}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
      {country.flags.png && (
        <div className="flex justify-center items-center">
          <img
            src={country.flags.png}
            className="w-56 h-auto border rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
