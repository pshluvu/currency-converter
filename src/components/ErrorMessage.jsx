export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 p-2 rounded-lg text-center mb-3 transition-colors duration-500">
      {message}
    </div>
  );
}
