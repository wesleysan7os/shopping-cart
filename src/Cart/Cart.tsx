import { Wrapper } from './Cart.styles';
import { CartItem } from '../CartItem/CartItem';
import { CartItemType } from '../App';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

export function Cart({ cartItems, addToCart, removeFromCart }: CartProps) {
  const calculateTotal = (cartItems: CartItemType[]) => 
    cartItems.reduce((acumulator: number, item) => acumulator + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
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
}