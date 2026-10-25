import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <Sparkles size={15} />
              Handpicked for you
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Featured Products
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Discover popular picks from our collection.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700"
          >
            View all <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}