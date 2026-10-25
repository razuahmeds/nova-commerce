
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/products/ProductCard";

export default function Wishlist() {
  const { wishlist } = useShop();

  return (
    <main className="min-h-[60vh] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <Heart className="text-pink-600" size={30} />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Wishlist
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Your favorite products in one place
            </p>
          </div>
        </div>

        {!wishlist || wishlist.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center">
            <Heart
              size={52}
              className="mx-auto mb-4 text-slate-300"
            />
            <h2 className="text-xl font-semibold text-slate-800">
              Your wishlist is empty
            </h2>
            <p className="mt-2 text-slate-500">
              Save your favorite products to find them here.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              <ShoppingBag size={18} />
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
