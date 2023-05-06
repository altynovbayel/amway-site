import axios from "axios";

export const api = {
  getProducts: () => axios.get('/products/'),
  getProduct: (id) => axios.get(`/products/${id}/`),
}