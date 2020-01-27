import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledH2 = styled.h2`
  color: ${colors.headerBlack};
  font-size: ${props => (props.bigger ? "5.6rem" : "2.2rem")};
  line-height: ${props => (props.bigger ? "6rem" : "2.6rem")};
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-family: ${props =>
    props.open ? `"Open Sans", sans-serif` : `"Poppins", sans-serif`};

  @media (max-width: 768px) {
    font-size: ${props => {
      if (props.bigger) {
        return `3.7rem`
      } else if (props.smaller) {
        return `1.25rem`
      } else {
        return `1.6rem`
      }
    }};
    line-height: ${props => {
      if (props.bigger) {
        return `4rem`
      } else if (props.smaller) {
        return `2rem`
      } else {
        return `2.4rem`
      }
    }};
    margin-bottom: ${props => (props.smaller ? `0.5rem` : `1rem`)};
  }
`

const H2 = ({ children, bigger, open, smaller }) => (
  <StyledH2 bigger={bigger} open={open} smaller={smaller}>
    {children}
  </StyledH2>
)

export default H2
