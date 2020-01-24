import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor || colors.white};
  margin: ${props => (props.noMargin ? `0` : `6rem auto 3rem`)};
  max-width: 1140px;
`

const textColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.right ? "right" : "left")};
  width: 50%;
`

const imageColumn = styled(textColumn)`
  text-align: unset;
`
const Section = ({ children, bgColor, noMargin }) => (
  <StyledSection bgColor={bgColor} noMargin={noMargin}>
    {children}
  </StyledSection>
)

export default Section
