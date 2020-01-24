import React from "react"
import styled from "styled-components"
import Media from "react-media"
import { colors } from "../utils/colors"
import Button from "../components/Button"
import Mockups from "../../static/screen-mockups.svg"
import H2 from "../components/H2"

const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const StyledP = styled.p`
  color: ${colors.textBlack};
  font-size: 1.05rem;
  line-height: 1.6rem;
  width: 60%;
  min-width: 500px;
  margin-bottom: 2.4rem;
`

const StyledImg = styled.img`
  margin-top: 5.4rem;
  max-width: 100%;
`
const Hero = () => (
  <StyledHeroWrapper>
    <StyledHero>
      <H2>Build the community your fans will love</H2>
      <StyledP>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </StyledP>
      <Button
        bgColor={colors.pink}
        textColor={colors.white}
        borderColor={colors.pink}
        bigger
        shadow
      >
        Get started for free
      </Button>
      <StyledImg src={Mockups} alt="Screen mockups" />
    </StyledHero>
  </StyledHeroWrapper>
)

export default Hero
