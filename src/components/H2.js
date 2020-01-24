import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledH2 = styled.h2`
  color: ${colors.headerBlack};
  font-size: ${props => (props.bigger ? "4.8rem" : "2.5rem")};
  line-height: ${props => (props.bigger ? "5.2rem" : "3rem")};
  letter-spacing: -1px;
  margin-bottom: 2rem;
  text-transform: capitalize;
`

const H2 = ({ children, bigger }) => (
  <StyledH2 bigger={bigger}>{children}</StyledH2>
)

export default H2
