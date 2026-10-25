
const socials = [
  { name: "Facebook", icon: "f", url: "https://facebook.com" },
  { name: "Instagram", icon: "◎", url: "https://instagram.com" },
  { name: "YouTube", icon: "▶", url: "https://youtube.com" },
  { name: "LinkedIn", icon: "in", url: "https://linkedin.com" },
  { name: "GitHub", icon: "⌘", url: "https://github.com" },
];

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Special Offers", href: "/shop" },
    { label: "My Wishlist", href: "/wishlist" },
    { label: "Shopping Cart", href: "/cart" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "My Account", href: "/account" },
    { label: "My Orders", href: "/orders" },
    { label: "Help Center", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                N
              </span>
              Nova<span className="text-orange-400">Mart</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Discover quality products at great prices. Enjoy a simple,
              secure, and convenient shopping experience with NovaMart.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white transition hover:bg-orange-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-5 font-bold text-white">{heading}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-orange-400"
                    >
                      → {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-bold text-white">Get in Touch</h3>
            <p className="mb-5 text-sm leading-6 text-slate-400">
              Have a question? Our team is here to help you.
            </p>

            <div className="space-y-4 text-sm text-slate-400">
              <p>📍 Bangladesh</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:support@novamart.example"
                  className="break-all hover:text-orange-400"
                >
                  support@novamart.example
                </a>
              </p>
              <p>
                ☎{" "}
                <a
                  href="tel:+8801000000000"
                  className="hover:text-orange-400"
                >
                  +880 1000-000000
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} NovaMart. All rights reserved.
          </p>
          <div className="flex justify-center gap-5">
            <a href="/contact" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
