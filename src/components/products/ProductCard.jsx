import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useShop } from "../../context/ShopContext";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useShop();

  const wished = isWishlisted(product.id);

  return (
    <article className="product-card group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden bg-slate-50">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="product-image aspect-square w-full object-cover"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product)}
          aria-label={
            wished ? "Remove from wishlist" : "Add to wishlist"
          }
          className={`absolute right-3 top-3 rounded-full bg-white p-2.5 shadow-sm transition hover:scale-110 ${
            wished ? "text-rose-500" : "text-slate-600"
          }`}
        >
          <Heart
            size={18}
            fill={wished ? "currentColor" : "none"}
          />
        </button>

        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-slate-900 opacity-0 shadow-lg transition duration-300 hover:bg-brand-600 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-slate-400">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 min-h-10 text-sm font-bold leading-5 text-slate-800 transition hover:text-brand-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1 text-amber-500">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold text-slate-700">
            {product.rating}
          </span>
          <span className="text-xs text-slate-400">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-base font-extrabold text-slate-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice > product.price && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}