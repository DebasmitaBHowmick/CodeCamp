
import UseTitle from './../../hooks/UseTitle';
import CartList from './components/CartList';
import EmptyCart from './components/EmptyCart';
import { useSelector } from 'react-redux';


const CartPage = () => {
  const cartState = useSelector((state) => state.cart.cartList);
  UseTitle(`Cart (${cartState.length})`);

  return (
    <main>
       { cartState.length ? <CartList /> : <EmptyCart /> } 
      
    </main>
  )
}

export default CartPage
