
import styled from "styled-components"
import { mobile } from "../responsive";
import { Facebook, Instagram } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  height:40vh,
  ${mobile({
    height: "20px",
  })}
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding:20px;
`;
const Right = styled.div`
flex:1;
`;
const Description = styled.p`
font-weight:600;
`
const SocialContainer = styled.div`
display:flex;
align-items:center;
flex-derection:column;

`
const SocialIcon = styled.div`
height:40px;
width:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color };
display:flex;
align-items:center;
justify-content:center;

`
const Logo = styled.div`
font-size:40px;
font-weight:800;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mumbi</Logo>
        <Description>
          We have the best clothes a the lowest prices all around zambia
        </Description>
        <SocialContainer>
          <SocialIcon color="4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="fb3958">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>Contact Details</Right>
        
    </Container>
  );
}

export default Footer