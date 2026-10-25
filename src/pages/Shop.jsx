import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/products/ProductCard";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        !category || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, category, maxPrice, sort]);

  function resetFilters() {
    setSearch("");
    setCategory("");
    setMaxPrice(10000);
    setSort("featured");
  }

  return (
    <section className="container-custom min-h-[500px] py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
          Explore our collection
        </p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Shop All Products
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Discover something special for your everyday life.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-slate-900">
              <SlidersHorizontal size={18} />
              Filters
            </h2>

            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-brand-600"
            >
              Reset
            </button>
          </div>

          <label className="mt-6 block text-sm font-bold text-slate-800">
            Search
          </label>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Product name..."
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-brand-500"
          />

          <label className="mt-6 block text-sm font-bold text-slate-800">
            Category
          </label>

          <div className="mt-3 grid gap-3">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
              <input
                type="radio"
                name="category"
                checked={category === ""}
                onChange={() => setCategory("")}
                className="accent-blue-600"
              />
              All Categories
            </label>

            {categories.map((item) => (
              <label
                key={item.id}
                className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === item.name}
                  onChange={() => setCategory(item.name)}
                  className="accent-blue-600"
                />
                {item.name}
              </label>
            ))}
          </div>

          <label className="mt-6 block text-sm font-bold text-slate-800">
            Maximum Price: ৳{maxPrice.toLocaleString("en-BD")}
          </label>

          <input
            type="range"
            min="500"
            max="10000"
            step="250"
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(Number(event.target.value))
            }
            className="mt-4 w-full accent-blue-600"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>৳500</span>
            <span>৳10,000</span>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-brand-500"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <h3 className="text-lg font-bold text-slate-900">
                No products found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another search or reset your filters.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}