import CartItem from "./CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../model";
import Item from "./Item";

interface Props {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Add some items to your cart to see them here!</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
