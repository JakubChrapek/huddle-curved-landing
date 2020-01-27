import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"
import Button from "../components/Button"
import Mockups from "../../static/screen-mockups.svg"
import H2 from "../components/H2"

const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  @media (max-width: 768px) {
    margin: 7rem 2rem 0;
  }
  @media (max-width: 368px) {
    margin: 5rem 1rem;
  }
`

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const StyledP = styled.p`
  color: ${colors.textBlack};
  font-weight: 400;
  font-size: 1.175rem;
  line-height: 1.75rem;
  width: 60%;
  min-width: 500px;
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4rem;
    margin-bottom: 3.2rem;
  }
`

const StyledImg = styled.img`
  margin-top: 5.4rem;
  max-width: 100%;
  @media (max-width: 1140px) {
    width: calc(100% - 1rem);
    margin-top: 7rem;
  }
`
const Hero = () => (
  <StyledHeroWrapper>
    <StyledHero>
      <H2>
        Build the community
        <br />
        your fans will love
      </H2>
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
