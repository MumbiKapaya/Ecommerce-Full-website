import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70 vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: gray;
  background-color: white;
  opacity: 0.5;
  margin: 10px;
`;
const Button = styled.button`
 background-color: white;
  color: gray;
  border-radius:4px;
  border: 2px solid #aba6a6;
  font-weight:600;
  opacity: 0.5;
  cursor: pointer;
transition-duration: 0.4s;
:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to = {`/products/${item.cat}`}>
      <Image src={item.imagesrc} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
        </InfoContainer>
        </Link>
    </Container>
  );
};

export default CategoryItem;
