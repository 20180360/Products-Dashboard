import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductSkeleton from "../components/ProductSkeleton";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  // Loading UI
  if (loading) {
    return (
      <div
        className={`min-h-screen p-6 ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Products Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-xl text-center">
          <h2 className="text-red-500 text-2xl font-bold mb-2">
            Error
          </h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Products Dashboard
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
      />

      {/* Filter */}
     <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-2`}>
  Filter by category:
</p>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
      />

      {/* Products */}
      {currentProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : darkMode
                ? "bg-gray-800 text-white"
                : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;