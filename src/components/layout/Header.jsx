import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  UserRound,
} from "lucide-react";
import { useShop } from "../../context/ShopContext";

export default function Header() {
  const { cartCount, wishlist } = useShop();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setMobileMenu(false);
    }
  }

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Wishlist", to: "/wishlist" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-custom flex h-[76px] items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <span className="text-2xl font-extrabold tracking-tight text-brand-600">
            nova<span className="text-slate-900">mart.</span>
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:block">
            Shopping made simple
          </span>
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden max-w-md flex-1 items-center rounded-full border border-slate-200 bg-slate-50 px-4 transition focus-within:border-brand-500 md:flex"
        >
          <Search size={18} className="text-slate-400" />

          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent px-3 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            className="rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white hover:bg-brand-700"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 lg:flex"
          >
            <UserRound size={20} />
            Account
          </Link>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative hidden text-slate-700 hover:text-brand-600 sm:block"
          >
            <Heart size={22} />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative text-slate-700 hover:text-brand-600"
          >
            <ShoppingBag size={23} />
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-slate-100 md:block">
        <div className="container-custom flex h-12 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {mobileMenu && (
        <div className="border-t border-slate-100 bg-white p-4 md:hidden">
          <form onSubmit={handleSearch} className="mb-4 flex gap-2">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand-600 px-3 text-white"
            >
              <Search size={18} />
            </button>
          </form>

          <div className="grid gap-1">
            {[
              ...navLinks,
              { label: "Account", to: "/login" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}