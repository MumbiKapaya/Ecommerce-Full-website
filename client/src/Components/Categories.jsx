import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive"
const Container = styled.div`
  display: flex;
  padding: 20 px;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    padding:"10px",
  })}
`;

function Categories() {
  return (
      <Container>
          {categories.map(item => (
            <CategoryItem item={item} key = { item.id}/>
         ))}
    </Container>
  )
}

export default Categories