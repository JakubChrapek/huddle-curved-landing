import React from "react"
import styled from "styled-components"
import H2 from "../components/H2"
import Button from "../components/Button"
import { colors } from "../utils/colors"

const StyledReady = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  @media (max-width: 767px) {
    text-align: center;
    margin: 5rem auto 16rem;
  }
`
const Ready = () => (
  <StyledReady>
    <H2>Ready to build your community?</H2>
    <Button
      bgColor={colors.pink}
      textColor={colors.white}
      borderColor={colors.pink}
      bigger
      shadow
    >
      Get started for free
    </Button>
  </StyledReady>
)

export default Ready
