import React from 'react'
import {mobile} from "../responsive"
import styled from 'styled-components'
const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  color:white;
  justify-content: center;
  background-color: #118449;
  font-size: 14px;
  font-weight: 500;
  ${mobile({
    width: "100%",
    height:"40px",
  })}
`;
function Announcements() {
  return (
    <Container>
      Examples of badges containing text, using primary and secondary colors.
      The badge is applied to its children.
    </Container>
  );
}

export default Announcements