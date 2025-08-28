
import Success from './components/Success';
import FailOrder from './components/FailOrder';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
  const {state} = useLocation();
  
  return (
    <main>
      {state.status ? <Success data = {state.data}/> : <FailOrder/>}
    </main>
  )
}

export default OrderPage
