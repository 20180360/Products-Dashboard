import Select from "./ui/Select";

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  darkMode,
}) {
  return (
    <div className="mb-6">
      <Select
        darkMode={darkMode}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>

        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default CategoryFilter;