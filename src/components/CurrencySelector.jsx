export default function CurrencySelector({ currencies, selected, onChange }) {
  return (
    <select
      className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {currencies.map((curr) => (
        <option key={curr} value={curr}>
          {curr}
        </option>
      ))}
    </select>
  );
}
