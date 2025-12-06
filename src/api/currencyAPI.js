export async function fetchExchangeRates(base = "USD") {
  const API_KEY = "5ad8b3a6cf3e80fb8d522940"; // replace with your key
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch exchange rates");

  const data = await res.json();
  return data.conversion_rates;
}
