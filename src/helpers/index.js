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