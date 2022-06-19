import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import {Link} from "react-router-dom"
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.div`
  font-weight: 600;
  text-align: center;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "5px 0px",
  })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection:"column",
  })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

`;

const Image = styled.img`
  width: 200px;
  ${mobile({
    width: "60%",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    padding: "1px 5px",
    width:"100%",
  })}
`;

const ProductName = styled.span`
  display: flex;
`;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const Pricedetail = styled.div`
  flex: 1;
  ${mobile({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin:"10px 0px",
  })}
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20;
  
`;
const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  font-weight: 600;
  ${mobile({
    margin: "0px 30px",
  })}
`;

const ProductInfo = styled.div`
  flex: 3;

`;

const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const Toptext = styled.span`

text-decoration: underline;
cursor:pointer;
margin 0px 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const ProductSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``
const SummaryItemprice = styled.span``
const Button = styled.button`
width: 100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`


const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart.products);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Toptext>Shopping Bag (30)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </TopTexts>
          <TopButton type="filled">CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <ProductInfo>
            {
              cart.products?.map((product) => 
                <Product>
              <ProductDetail>
                <Image src={product.image} />
                <Details>
                  <ProductName>
                    <b>Product: </b>{product.title}
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>{product._id}
                  </ProductID>
                  <ProductName>
                    <b>Color </b>
                    <ProductColor color={product.color} />
                  </ProductName>
                  <ProductSize>
                    <b>Size</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <Pricedetail>
                <ProductAmountContainer>
                  <Add />
                      <ProductAmount>{cart.quantity }</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                    <ProductPrice>{ `K ${product.price*product.quantity}`}</ProductPrice>
              </Pricedetail>
            </Product>
              )
            }
          </ProductInfo>
          <ProductSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemprice>K 300</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Amount</SummaryItemText>
              <SummaryItemprice>K 10</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemprice>K 300</SummaryItemprice>
            </SummaryItem>
            <SummaryItem type = "total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemText>K 300</SummaryItemText>
            </SummaryItem>
            <Link to="checkout">
              <Button >Checkout Now</Button>
            </Link>
          </ProductSummary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
