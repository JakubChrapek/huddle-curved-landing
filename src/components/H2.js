import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledH2 = styled.h2`
  color: ${colors.headerBlack};
  font-size: ${props => (props.bigger ? "5.6rem" : "2.8rem")};
  line-height: ${props => (props.bigger ? "6rem" : "3rem")};
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-family: ${props =>
    props.open ? `"Open Sans", sans-serif` : `"Poppins", sans-serif`};
`

const H2 = ({ children, bigger, open }) => (
  <StyledH2 bigger={bigger} open={open}>
    {children}
  </StyledH2>
)

export default H2
