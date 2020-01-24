import React from "react"
import styled from "styled-components"

const StyledH3 = styled.h3`
  color: ${props => props.color};
  font-size: ${props => (props.bigger ? "3rem" : "1.4rem")};
  font-weight: ${props => (props.light ? "400" : "700")};
  line-height: ${props => (props.bigger ? "3.2rem" : "1.6rem")};
  letter-spacing: 0px;
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-family: ${props =>
    props.open ? `"Open Sans", sans-serif` : `"Poppins", sans-serif`};
`

const H3 = ({ children, bigger, light, textColor, open }) => (
  <StyledH3 bigger={bigger} color={textColor} light={light} open={open}>
    {children}
  </StyledH3>
)

export default H3
