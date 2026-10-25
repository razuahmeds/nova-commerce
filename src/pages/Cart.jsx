import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/formatPrice";

export default function Cart() {
  const {
    cart,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useShop();

  const shipping = cartTotal >= 3000 || cartTotal === 0 ? 0 : 100;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <section className="container-custom flex min-h-[480px] flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-blue-50 p-6 text-brand-600">
          <ShoppingBag size={42} />
        </div>

        <h1 className="mt-6 text-2xl font-extrabold text-slate-900">
          Your cart is empty
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link
          to="/shop"
          className="mt-6 rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700"
        >
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="container-custom py-10 sm:py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">
        Shopping Cart
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        You have {cart.length} different product(s) in your cart.
      </p>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_350px]">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-4 border-b border-slate-100 p-4 last:border-b-0 sm:flex-nowrap sm:p-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-xl bg-slate-50 object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400">
                  {item.category}
                </p>

                <h3 className="mt-1 font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-2 font-extrabold text-brand-600">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center rounded-xl border border-slate-200">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  className="p-2 disabled:opacity-30"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>

                <span className="min-w-8 text-center text-sm font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  disabled={item.quantity >= item.stock}
                  className="p-2 disabled:opacity-30"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-500"
                aria-label="Remove product"
              >
                <Trash2 size={19} />
              </button>
            </div>
          ))}
        </div>

        <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-900">
            Order Summary
          </h2>

          <div className="mt-6 grid gap-4 text-sm">
            <div className="flex justify-between gap-4 text-slate-500">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">
                {formatPrice(cartTotal)}
              </span>
            </div>

            <div className="flex justify-between gap-4 text-slate-500">
              <span>Delivery</span>
              <span className="font-semibold text-slate-900">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </span>
            </div>

            {cartTotal < 3000 && (
              <p className="rounded-lg bg-blue-50 p-3 text-xs leading-5 text-brand-700">
                Add {formatPrice(3000 - cartTotal)} more to qualify
                for free delivery.
              </p>
            )}

            <div className="border-t border-slate-100 pt-4">
              <div className="flex justify-between gap-4">
                <span className="font-bold text-slate-900">
                  Total
                </span>
                <span className="text-xl font-extrabold text-slate-900">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/shop"
            className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}