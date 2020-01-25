import React from "react"
import styled from "styled-components"

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.text ? "flex-start" : "center")};
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
  overflow: hidden;
`

const TextColumn = ({ children, left, right, text }) => (
  <StyledTextColumn left={left} right={right} text={text}>
    {children}
  </StyledTextColumn>
)

export default TextColumn
