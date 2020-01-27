import React from "react"
import styled from "styled-components"

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${props => (props.first ? `0` : `1`)};
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
  @media (max-width: 768px) {
    width: 100%;
    margin: ${props => (props.marginTop ? `${props.marginTop} 0 0` : `0`)};
    align-items: center;
    text-align: center;
  }
`

const TextColumn = ({ children, left, right, text, first, marginTop }) => (
  <StyledTextColumn
    left={left}
    right={right}
    text={text}
    first={first}
    marginTop={marginTop}
  >
    {children}
  </StyledTextColumn>
)

export default TextColumn
