export default function AmountInput({ value, onChange }) {
  return (
    <input
      type="number"
      className="border border-gray-300 rounded-lg p-2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter amount"
    />
  );
}
