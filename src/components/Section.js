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
  @media (max-width: 1140px) {
    margin: ${props => {
      if (props.noMargin) {
        return `0`
      } else if (props.smallerMargin) {
        return `2rem 3rem`
      } else if (props.biggerMargin) {
        return `10rem 3rem 8rem`
      } else {
        return `6rem 3rem`
      }
    }};
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin: ${props => {
      if (props.noMargin) {
        return `0`
      } else if (props.smallerMargin) {
        return `2rem`
      } else if (props.biggerMargin) {
        return `10rem 2rem 8rem`
      } else {
        return `6rem 2rem`
      }
    }};
    margin-bottom: ${props => (props.noMarginBottom ? `0` : `6rem 2rem`)};
  }
  margin-bottom: ${props => (props.noMarginBottom ? `0` : `6rem 3rem`)};
`

const Section = ({
  children,
  bgColor,
  noMargin,
  smallerMargin,
  biggerMargin,
  top,
  noMarginBottom,
}) => (
  <StyledSection
    bgColor={bgColor}
    noMargin={noMargin}
    smallerMargin={smallerMargin}
    biggerMargin={biggerMargin}
    top={top}
    noMarginBottom={noMarginBottom}
  >
    {children}
  </StyledSection>
)

export default Section
