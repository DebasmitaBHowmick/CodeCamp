import axios from "axios";

// Remove trailing slash from env variable (safe for local & production)
const BASE_URL = process.env.REACT_APP_HOST.replace(/\/$/, "");

// ---------- Products ----------
export async function getProductList(queryTerm = "") {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`, {
      params: queryTerm ? { q: queryTerm } : {},
    });

    const data = response.data;
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
}

// Get single product by ID
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`);
    const data = response.data;
    return Array.isArray(data) ? data : [];

  } catch (error) {
    console.error(`Error fetching product ID ${id}:`, error);
    throw error;
   
  }
}

// ---------- Featured Products ----------
export async function featuredProduct() {
  try {
    const response = await axios.get(`${BASE_URL}/api/featured_products`);
    const data= response.data;
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
}