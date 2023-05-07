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


export const GetComments = () => {
  const [ comments, setComments ] = React.useState(null)
  
  React.useEffect(() => {
    api.getComments()
      .then(res => res.json())
      .then(res => setComments(res))
  }, [])

  return {
    comments
  }
}