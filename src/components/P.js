import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledP = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${colors.textBlack};
  letter-spacing: -0.02rem;
  @media (max-width: 767px) {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
`

const P = ({ children }) => <StyledP>{children}</StyledP>

export default P
