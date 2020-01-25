import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.top ? `flex-start` : `center`)};
  background-color: ${props => `${props.bgColor}` || colors.white};
  margin: ${props => {
    if (props.noMargin) {
      return `0`
    } else if (props.smallerMargin) {
      return `2rem auto`
    } else if (props.biggerMargin) {
      return `10rem auto 8rem`
    } else {
      return `6rem auto`
    }
  }};
  max-width: 1140px;
`

const Section = ({
  children,
  bgColor,
  noMargin,
  smallerMargin,
  biggerMargin,
  top,
}) => (
  <StyledSection
    bgColor={bgColor}
    noMargin={noMargin}
    smallerMargin={smallerMargin}
    biggerMargin={biggerMargin}
    top={top}
  >
    {children}
  </StyledSection>
)

export default Section
