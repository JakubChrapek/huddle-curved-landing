import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.left ? `flex-start` : `center`)};
  margin: ${props => {
    if (props.left) {
      return `0 4rem 0 0`
    } else if (props.right) {
      return `0 0 0 4rem`
    } else {
      return `0`
    }
  }};
  width: 50%;
`

const TextColumn = ({ children, left }) => (
  <StyledTextColumn left={left}>{children}</StyledTextColumn>
)

export default TextColumn
