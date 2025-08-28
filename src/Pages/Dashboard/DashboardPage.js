

import { useEffect, useState } from "react";
import DashCard from "./components/DashCard";
import Empty from './components/Empty';
import { toast } from 'react-toastify';
import { getUserOrder } from "../../services";
import UseTitle from './../../hooks/UseTitle';

const DashboardPage = () => {

//Title
UseTitle("Dashborad");

//Storing CCID coz of filter method
const ccid = sessionStorage.getItem("ccid");
const [orders, setOrders] = useState([]);

useEffect(()=> {

  async function fetchOrder() {
        try {       
        const data = await getUserOrder()
            
        if(!data){
            setOrders([]);
            return;
        }
          // filter by logged-in user
    const userOrders = data.filter(order => order.userInfo?.id === Number(ccid));
          setOrders(userOrders);
        } 
        catch (error) {
          toast.error("Something went wrong", error);
          console.log(error);
          setOrders([]);
        }
    }
    
    fetchOrder()
}, [ccid])


  return (
    <main>
      <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
     
      <section>
        {orders.length > 0 && orders.map((order) => <DashCard key={order.id} order = {order}/>)}
      </section>
      <section>
        {orders.length ===0 && <Empty/>}
      </section>
    </main>
  )
}

export default DashboardPage
