import axios from "axios";

// Remove trailing slash from env variable (safe for local & production)
const BASE_URL = process.env.REACT_APP_HOST.replace(/\/$/, "");

// ---------- Products ----------
export async function getProductList(queryTerm = "") {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: queryTerm ? { q: queryTerm } : {},
    });

    return response.data
    // const data = response.data;
    // return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
}

// Get single product by ID
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
    // const data = response.data;
    // return Array.isArray(data) ? data : [];

  } catch (error) {
    console.error(`Error fetching product ID ${id}:`, error);
    throw error;
   
  }
}

// ---------- Featured Products ----------
export async function featuredProduct() {
  try {
    const response = await axios.get(`${BASE_URL}/featured_products`);
    const data= response.data;
    return data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
}