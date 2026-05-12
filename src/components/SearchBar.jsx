import Input from "./ui/Input";

function SearchBar({ search, setSearch, darkMode }) {
  return (
    <div className="mb-6">
      <Input
        darkMode={darkMode}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;