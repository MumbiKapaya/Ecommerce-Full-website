import React from 'react'
import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {mobile} from "../responsive"
const Container = styled.div`
  height: 40vh;
  background-color: #daeded;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    height: "20vh",
  })}
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({
    marginBottom: "10px",
    fontSize:"20px",
  })}
`;
const Description = styled.div`
font-size:24px;
font-weight:300;
margin-bottom 20px;
 ${mobile({
   marginBottom: "10px",
   fontSize: "16px",
   textAlign:"center",
 })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%",
  })}
`;
 const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;

`;
const Button = styled.button`
  border: none;
  flex: 1;
  color: white;
  background-color: #6977e0;
`;

const Newsletter = () => {
  return (
      <Container>
          <Title>News letter</Title>
          <Description>Get updates from us on the recent products</Description>
          <InputContainer>
              <Input placeholder='Your email'/>
            <Button>
                <SendOutlinedIcon  />
            </Button>
          </InputContainer>

    </Container>
  )
}

export default Newsletter