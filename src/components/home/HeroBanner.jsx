import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="container-custom grid min-h-[500px] items-center gap-10 py-12 md:grid-cols-2 md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-600">
            <Sparkles size={15} />
            Your everyday marketplace
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Discover
            <br />
            products you
            <br />
            <span className="text-brand-600">will love.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Explore our collection of modern essentials, lifestyle
            accessories, and everyday favourites at great prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-brand-700"
            >
              Explore Collection
              <ArrowRight size={18} />
            </Link>

            <a
              href="#featured"
              className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
            >
              View Featured
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-extrabold text-slate-900">
                500+
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Happy customers
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-slate-900">
                100+
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Product choices
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-slate-900">
                4.8/5
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Demo store rating
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop"
            alt="Modern shopping collection"
            className="relative h-[320px] w-full rounded-3xl object-cover shadow-2xl sm:h-[420px]"
          />

          <div className="absolute -bottom-5 left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-8 sm:p-5">
            <p className="text-xs font-medium text-slate-500">
              Selected products
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              Fresh finds, great prices
            </p>
            <p className="mt-1 text-xs text-brand-600">
              Find your next favourite
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}