import React from "react"
import { api } from "../config/api"

export const GetProducts = () => {
  const [ products, setProducts ] = React.useState(null)
  
  React.useEffect(() => {
    api.getProducts()
    .then(res => setProducts(res.data))
  }, [])
  
  return {
    products
  }
}

export const GetProduct = (id) => {
  const [ product, setProduct ] = React.useState(null)
  
  React.useEffect(() => {
    api.getProduct(id)
      .then(res => setProduct(res.data))
  }, [])
  
  return {
    product
  }
}



export const GetComments = () => {
  const [ comments, setComments ] = React.useState(null)
  
  React.useEffect(() => {
    api.getComments()
      .then(res => setComments(res.data))
  }, [])

  return {
    comments
  }
}

export const ScrollToTop = () => {
  return window.scrollTo({
    top: 0
  })
}
