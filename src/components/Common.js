import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled.a`
  text-decoration: none;
  color: #5555cc;
`;

export const Card = A.extend`
display: flex;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
transition: background-color 0.5s;
&:hover {
  background-color: #eee;
}
`;

export const LinkStyled = A.withComponent(Link);
