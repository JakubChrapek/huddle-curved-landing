import React from "react"
import styled from "styled-components"

const StyledH3 = styled.h3`
  color: ${props => props.color};
  font-size: ${props => (props.bigger ? "3rem" : "1.2rem")};
  font-weight: ${props => (props.light ? "400" : "700")};
  line-height: ${props => (props.bigger ? "3.2rem" : "1.6rem")};
  letter-spacing: 0px;
  margin-bottom: 2rem;
  text-transform: capitalize;
`

const H3 = ({ children, bigger, light, textColor }) => (
  <StyledH3 bigger={bigger} color={textColor} light={light}>
    {children}
  </StyledH3>
)

export default H3
