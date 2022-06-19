import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://i.pinimg.com/736x/70/36/40/703640e10ce197f3d84a9f6840c171a1.jpg")
    no-repeat center center fixed;

 
  
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: lightgray;
  ${mobile({
    width: "80%",
    height:"80%",
  })}
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  ${mobile({
    fontSize: "20px",
    fontWeight: "800",
    marginBottom:"10px",
  })}
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 20px;
  ${mobile({
    margin: "10px 5px 0px 0px",
    height:"8px",
  })}
`;

const Agreement = styled.span`
font-size:12px;
margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #675e7e;
  color:white;
  cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
