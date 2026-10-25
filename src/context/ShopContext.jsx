import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ShopContext = createContext(null);

function getStoredData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() =>
    getStoredData("nova-cart", [])
  );

  const [wishlist, setWishlist] = useState(() =>
    getStoredData("nova-wishlist", [])
  );

  useEffect(() => {
    localStorage.setItem("nova-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("nova-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + 1,
                  product.stock
                ),
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart((current) =>
      current.filter((item) => item.id !== productId)
    );
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) return;

    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.min(quantity, item.stock),
            }
          : item
      )
    );
  }

  function toggleWishlist(product) {
    setWishlist((current) => {
      const exists = current.some(
        (item) => item.id === product.id
      );

      return exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
    });
  }

  function isWishlisted(productId) {
    return wishlist.some((item) => item.id === productId);
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const value = {
    cart,
    wishlist,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    isWishlisted,
    clearCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}