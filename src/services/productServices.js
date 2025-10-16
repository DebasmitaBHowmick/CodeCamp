import axios from "axios";


export async function getProductList(queryTerm) {

const response = await axios.get(`${process.env.REACT_APP_HOST}/api/products?q=${queryTerm ? queryTerm : ""}`);
if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    };
return response.data;}



export async function getProduct(id) {
const response = await axios.get(`${process.env.REACT_APP_HOST}/api/products/${id}`);
if (response.status !== 200) {
    throw new Error(`Request failed: ${response.status}`);
    };
        return response.data;
};


export async function featuredProduct() {
    const FeaturedURL = `${process.env.REACT_APP_HOST}/api/feaatured_products`;
    const response = await fetch(FeaturedURL);
    const data = await response.json();
    if (!response.ok) {
        throw new Error({message: response.statusText, status: response.status})
    }
    return data;
};