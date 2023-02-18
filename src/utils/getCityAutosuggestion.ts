import { useEffect, useState } from "react";

const cities = [
  "london",
  "madrid",
  "buenos aires",
  "new york",
  "tokio",
  "japan",
  "new delhi",
  "sao paulo",
  "paris",
  "santiago",
  "montevideo",
];

async function getCityAutosuggestion(query: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        cities.filter((city) =>
          city.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}

function useDebounce(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const idTimeout = setTimeout(() => setDebounceValue(value), time);
    return () => clearTimeout(idTimeout);
  }, [value, time]);
  return debounceValue;
}
