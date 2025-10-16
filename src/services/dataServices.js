import { toast } from "react-toastify";

// Safe backend base URL
const BASE_URL = process.env.REACT_APP_HOST.replace(/\/$/, "");

// ---------- Get logged-in user ----------
export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const ccid = JSON.parse(sessionStorage.getItem("ccid"));

  if (!token || !ccid) return null;

  try {
    const response = await fetch(`${BASE_URL}/users/${ccid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) toast.error("Authentication failed. Please log in again.");
      else toast.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching user:", error);
    toast.error("Something went wrong while fetching user data.");
    return null;
  }
}

// ---------- Get orders for logged-in user ----------
export async function getUserOrder() {
  const token = JSON.parse(sessionStorage.getItem("token"));

  if (!token) {
    toast.info("You must be logged in to view orders.");
    return [];
  }

  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) toast.error("Authentication failed. Please log in again.");
      else toast.error(`HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching orders:", error);
    toast.error("Something went wrong while fetching orders.");
    return [];
  }
}

// ---------- Create a new order ----------
export async function createOrder(cartState, total, user) {
  const token = JSON.parse(sessionStorage.getItem("token"));

  if (!token) {
    toast.error("You must be logged in to place an order.");
    return null;
  }

  const order = {
    cartState,
    amount_paid: total,
    quantity: cartState.length,
    userId: user.id,
    userInfo: {
      name: user.name,
      email: user.email,
      id: user.id,
      payment_id: Math.floor(Math.random() * 10000000),
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      toast.error(`Failed to create order! status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    toast.success("Order created successfully!");
    return data;

  } catch (error) {
    console.error("Error creating order:", error);
    toast.error("Something went wrong while creating order.");
    return null;
  }
}
