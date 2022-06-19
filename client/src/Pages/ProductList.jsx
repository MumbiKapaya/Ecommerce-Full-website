import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {mobile} from "../responsive"
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
width:100%,
`
const Title = styled.h1`
  ${mobile({
    margin: "0px",
  })}
`;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "0px",
  })}
`;
const FilterText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px",
  })}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    display: "flex",
    flexDirection:"column",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-weight: 700;
  border-radius: 5%;
  ${mobile({
    margin: "5px 0px",
  })}
`;
const Option = styled.option`
`
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [color, setColor] = useState([])
  const [size, setSize] = useState([])
  const [filters, setfilters] = useState({});
  const [sort, setsort] = useState("Newest");


  //handle filter selections
  useEffect(() => {
    setfilters(color, size)
  }, [color, size]);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{ category }</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={(e => setColor({ [e.target.name]: e.target.value.toLowerCase() }))} >
            <Option selected disabled hidden >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Gray</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
            <Option>Pink</Option>
          </Select>
          <Select name="size" onChange={(e) => setSize({ [e.target.name]:e.target.value.toLowerCase() })} >
            <Option  selected disabled hidden >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={e => setsort(e.target.value)}>
            <Option disabled selected hidden>Sort by</Option>
            <Option value="newest">Newest</Option>
            <Option value="ascending">Price (asc)</Option>
            <Option value="descending">Price (des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
          <Products category={category} sort = {sort} filters ={filters} />
          <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList