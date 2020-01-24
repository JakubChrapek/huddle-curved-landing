import React from "react"
import styled from "styled-components"

const StyledP = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`

const P = ({ children }) => <StyledP>{children}</StyledP>

export default P
