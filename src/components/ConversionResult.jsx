export default function ConversionResult({ amount, from, to, rate }) {
  return (
    <div className="mt-4 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg text-center shadow-sm text-gray-700 dark:text-gray-100 transition-colors duration-500">
      <p className="text-lg font-semibold">
        {amount} {from} = {(amount * rate).toFixed(2)} {to}
      </p>
      <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
        1 {from} = {rate.toFixed(4)} {to}
      </p>
    </div>
  );
}
