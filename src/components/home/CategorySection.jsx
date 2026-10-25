import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

export default function CategorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Browse collections
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Find the products that fit your lifestyle.
            </p>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-1 text-sm font-bold text-brand-600 sm:flex"
          >
            View all <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-100"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-white/80">
                  {category.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-white">
                  Explore <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}