import axios from "axios";


export async function getProductList(queryTerm) {

const response = await axios.get(`${process.env.REACT_APP_HOST}/products?q=${queryTerm ? queryTerm : ""}`);
if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    };
return response;}



export async function getProduct(id) {
const response = await axios.get(`${process.env.REACT_APP_HOST}/444/products/${id}`);
if (response.status !== 200) {
    throw new Error(`Request failed: ${response.status}`);
    };
        return response;
};


export async function featuredProduct() {
    const FeaturedURL = `${process.env.REACT_APP_HOST}/444/featured_products`;
    const response = await fetch(FeaturedURL);
    const data = await response.json();
    if (!response.ok) {
        throw new Error({message: response.statusText, status: response.status})
    }
    return data;
};