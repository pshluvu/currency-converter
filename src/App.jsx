import { useState, useEffect } from "react";
import { fetchExchangeRates } from "./api/currencyAPI";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchExchangeRates(from)
      .then((data) => {
        setRates(data);
        setCurrencies(Object.keys(data));
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [from]);

  const conversionRate = rates[to] || 0;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black p-4 transition-colors duration-500">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md transition-colors duration-500">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              💱 Currency Converter
            </h1>
            <button
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-lg"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {error && <ErrorMessage message={error} />}

          <div className="flex gap-3 mb-4">
            <CurrencySelector
              currencies={currencies}
              selected={from}
              onChange={setFrom}
            />
            <CurrencySelector
              currencies={currencies}
              selected={to}
              onChange={setTo}
            />
          </div>

          <AmountInput value={amount} onChange={setAmount} />

          {rates[to] && (
            <ConversionResult
              amount={amount}
              from={from}
              to={to}
              rate={conversionRate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
