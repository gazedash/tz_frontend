import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled.a`
  text-decoration: none;
  color: #5555cc;
`;

export const LinkStyled = A.withComponent(Link);
