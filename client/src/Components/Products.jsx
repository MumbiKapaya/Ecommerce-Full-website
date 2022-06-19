import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Product from './Product'
import axios from "axios"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
`;

const Products = ({category, filters, sort }) => {
  //fetch the data
  const [ products, setProducts ] = useState([])
  const [ filteredProducts, setfilteredProducts ] = useState([]);
  //make a get request to the api if the category changes
  useEffect(() => {
    const getProducts = async () => {
      try {
        //get the products if there is category and if ther are ot
        const res = await axios.get(category?`http://localhost:5000/api/products?category=${category}`:`http://localhost:5000/api/products`);
        //get the products from the responce
        setProducts(res.data.products);
      } catch (error) {
      }
    }
    getProducts();
  },[category]);
  //when filters change
  useEffect(() => {
    filters &&(
      setfilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      )))
    )
  }, [products, filters])
  //sort the items
  function comparePrice( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

  useEffect(() => {
    if (sort === 'newest') {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt))
      console.log(filteredProducts)
    }
    if (sort === 'ascending') {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price))
    }
    if(sort === 'descending') {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price))
      console.log(filteredProducts)
      
    }
  }, [sort])
  
 
  return (
      <Container>
      {
        category ? filteredProducts.map((product) => <Product product={product} key = { product.id}/>):
          products.slice(0, 8).map((product) => <Product product={product} key={product.id } />
          
       )  
          }
      </Container>
  )
}

export default Products