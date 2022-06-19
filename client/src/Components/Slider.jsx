import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderInfo } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100.3vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 50%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100.3}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.backgcolor};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({
    width:"425px",
    position: "relative",
  })}
`;
const Image = styled.img`
  height: 100%;
  object-fit: container;
  ${mobile({
    width:"100%",
    objectFit: "cover",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({
    display: "flex",
    marginBottom:"10px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "lightgray",
    alignItems: "center",
    padding: "0px",
    opacity: "0.5",
    width: "90vw",
    position: "absolute",
    
  })}
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({
    fontSize: "20px",
    marginBottom:"3px",
  })}
`;
const Description = styled.p`
  margin: 50px, 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "20px",
    textAlign:"center",
    marginBottom: "3px",
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <ArrowCircleLeftOutlinedIcon onClick={() => handleArrowClick("left")} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderInfo.map((item) => (
          <Slide backgcolor={item.backgcolor} key={item.id}>
            <ImageContainer>
              <Image src={item.imageSrc} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right">
        <ArrowCircleRightOutlinedIcon
          onClick={() => handleArrowClick("right")}
        />
      </Arrow>
    </Container>
  );
}

export default Slider;
