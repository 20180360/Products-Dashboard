function Select({ darkMode, children, ...props }) {
  return (
    <select
      {...props}
      className={`w-full p-3 rounded-xl border transition ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      }`}
    >
      {children}
    </select>
  );
}

export default Select;