import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop All", to: "/shop" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="container-custom flex flex-wrap items-center justify-center gap-3 py-3 sm:gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-semibold transition ${
                isActive
                  ? "text-brand-600"
                  : "text-slate-600 hover:text-brand-600"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}