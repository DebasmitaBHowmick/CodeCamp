import { toast } from "react-toastify";


export async function getUser() {
const token = JSON.parse(sessionStorage.getItem("token"));
const ccid = JSON.parse(sessionStorage.getItem("ccid"));
 //Checking if user is logged in/out
if (!token) {   
            return null;
            }
const requestOpt= {method:"GET",
                headers: {"Content-Type": "application/json",
                Authorization: `Bearer ${token}`}
            }
            const response = await fetch(`${process.env.REACT_APP_HOST}/660/users/${ccid}`, 
             requestOpt);

            const data = await response.json()
            return data;
};


export async function getUserOrder() {
const token = JSON.parse(sessionStorage.getItem("token"));

    //Checking if user is logged in/out
                if (!token) {
                toast.info("You must be logged in to place an order.");
                return [];
                }
    
                const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, 
                    {method:"GET",
                    headers: {"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`}
                });
    
                 if (!response.ok) { 
                    if (response.status === 401) {
                        toast.error("Authentication failed. Please log in again.");
                        
                    } else {
                        toast.error(`HTTP error! status: ${response.status}`);
                    }
                    return []; // Stop processing if the response was not successful
                }
                const data = await response.json();
                //console.log(data)
                return data;
};


export async function createOrder(cartState,total, user ) {
const token = JSON.parse(sessionStorage.getItem("token"));
//const ccid = JSON.parse(sessionStorage.getItem("ccid"));
    const order= {
        cartState: cartState,
        amount_paid: total,
        quantity: cartState.length,
        userId: user.id, 
        userInfo:{
            name: user.name,
            email: user.email,
            id: user.id,
            payment_id: Math.floor(Math.random()*10000000)
        }
    }
     const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
                Authorization: `Bearer ${token}`},
            body: JSON.stringify(order),
        })
    const data =  await response.json();
    return data;
};