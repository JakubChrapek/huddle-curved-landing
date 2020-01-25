import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledCenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => `#${props.bgColor}` || colors.white};
`

const CenteredDiv = ({ children, bgColor }) => (
  <StyledCenteredDiv bgColor={bgColor}>{children}</StyledCenteredDiv>
)

export default CenteredDiv
