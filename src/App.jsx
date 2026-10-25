import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";

import AnnouncementBar from "./components/layout/AnnouncementBar.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function PlaceholderPage({ title }) {
  return (
    <section className="container-custom flex min-h-[450px] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">
        {title}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        This page is part of the NovaMart storefront. Its complete
        functionality can be added in the next development stage.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AnnouncementBar />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/product/:id"
              element={<PlaceholderPage title="Product Details" />}
            />

            <Route
              path="/checkout"
              element={<PlaceholderPage title="Checkout" />}
            />

            <Route
              path="/login"
              element={<PlaceholderPage title="Login" />}
            />

            <Route
              path="/register"
              element={<PlaceholderPage title="Create Account" />}
            />

            <Route
              path="/contact"
              element={<PlaceholderPage title="Contact Us" />}
            />

            <Route
              path="/account"
              element={<PlaceholderPage title="My Account" />}
            />

            <Route
              path="/orders"
              element={<PlaceholderPage title="My Orders" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </ShopProvider>
  );
}