function Input({ darkMode, ...props }) {
  return (
    <input
      {...props}
      className={`w-full p-3 rounded-xl border transition outline-none ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400"
          : "bg-white text-black border-gray-300"
      }`}
    />
  );
}

export default Input;