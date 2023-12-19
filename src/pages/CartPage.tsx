import { useSelector } from "react-redux";
import { cartSelector } from "../app/features/cart/cartSlice";
import { getTotalPrice } from "../utils/selector";

import CartProducts from "../components/CartProducts";

const CartPage = () => {
  const { cartItems } = useSelector(cartSelector);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <>
      <h3 className="text-2xl pl-2">All Price: {totalPrice}</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 p-2 rounded-md">
        {cartItems.map((product) => (
          <CartProducts key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default CartPage;
