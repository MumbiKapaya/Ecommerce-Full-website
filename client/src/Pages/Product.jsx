import React, { useState, useEffect } from 'react'
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
import {useLocation} from "react-router-dom"
import Newsletter from "../Components/Newsletter";
import axios from "axios"
import { addProduct } from '../Redux/cartRedux';
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection:"column",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({
    width: "100%",
    height:"100%",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding:"3px",
  })}
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 200;
`;
const Price = styled.div`
  font-size: 25px;
  font-weight: 400px;
  margin-bottom:20px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
display:flex;
align-items:center;
`

const ColorOption = styled.div`
width:20px;
height:20px;
margin-right:3PX;
border-radius:50%;
background-color:${props => props.color};
cursor:pointer;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:400;
margin-right:10px;
`
const FilterSize = styled.select`
border-radius:2px;
border: 2px solid black;
font-size:15px;
`
const SizeOption = styled.option`
` 
const AddRemoveContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`

display:flex;
align-items:center;
justify-content:center;
font-weight:700;

`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ac8ef9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;
const Button = styled.button`
  font-weight: 700;
  leghth:600px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #118449;
  background-color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.2);
  }
`;

  const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/products/find/${productId}`);
          setProduct(res.data.product)
        } catch (error) {
          console.log(error);
        }
        
      }
      getProduct();
    }, [productId])
    const handleAmount = (operation) => {
      if (operation === "add") {
        setQuantity(quantity + 1)
      } else {
        (quantity > 1) && setQuantity(quantity - 1)
      }
    }
    const handleAddCart = () => {
      dispatch(addProduct({ ...product, quantity,color,size}));
      
    }
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title }</Title>
          <Desc>
            {product.description}
          </Desc>
          <Price>{ product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product.color?.map((item) =>
                <ColorOption color ={item} onClick = {() => setColor(item)} />)
              }
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                <SizeOption disabled selected hidden>Select</SizeOption>
                {
                  product.size?.map((item) =>
                    <SizeOption key ={item}>{ item}</SizeOption>
                  )
                }
              </FilterSize>
            </Filter>
                  </FilterContainer>
                  <AddRemoveContainer>
                      <AmountContainer>
                          <Add onClick = {()=>handleAmount("add")} />
                          <Amount>{quantity}</Amount>
                          <Remove onClick = {() =>handleAmount("remove")} />
                      </AmountContainer>
                      <Button onClick = {() =>handleAddCart()}>ADD TO CART</Button>
            </AddRemoveContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
