import axios from "axios";

export const api = {
  getProducts: () => axios.get('/products/'),
  getProduct: (id) => axios.get(`/products/${id}/`),
  postComment: (data) => fetch(`https://631afc8ddc236c0b1ee91ae6.mockapi.io/api/v1/comments/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  getComments: () => fetch('https://631afc8ddc236c0b1ee91ae6.mockapi.io/api/v1/comments/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
}