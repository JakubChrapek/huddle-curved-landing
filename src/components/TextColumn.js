import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const TextColumn = ({ children, right }) => (
  <StyledTextColumn right={right}>{children}</StyledTextColumn>
)

export default TextColumn
