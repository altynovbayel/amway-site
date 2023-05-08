import axios from "axios";

export const api = {
  getProducts: () => axios.get('/products/'),
  getProduct: (id) => axios.get(`/products/${id}/`),
  getCategories: () => axios.get('/categories/'),
  postComment: (data) => axios.post('/reviews/', data),
  getComments: () => axios.get('/reviews/'),
  getSingleCategory: (id) => axios.get(`/categories/${id}`),
}