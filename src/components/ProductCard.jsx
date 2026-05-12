function ProductCard({ product,darkMode }) {
  return (
    <div
      className={`rounded-xl shadow-md p-4 flex flex-col transition ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div className="flex-grow">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 w-full object-contain mb-4"
        />

        <h2 className="font-semibold text-lg line-clamp-2 mb-2">
          {product.title}
        </h2>

        <p className="text-gray-500 mb-2">
          {product.category}
        </p>
      </div>

      <p className="text-xl font-bold text-blue-600 mt-auto">
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;