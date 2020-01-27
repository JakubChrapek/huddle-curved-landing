import React from "react"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import styled from "styled-components"
import H2 from "../components/H2"
import H3 from "../components/H3"
import CenteredDiv from "../components/CenteredDiv"
import iconCommunities from "../../static/icon-communities.svg"
import iconMessages from "../../static/icon-messages.svg"
import { colors } from "../utils/colors"

const StyledIcon = styled.img`
  width: 2.6rem;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    margin-bottom: 0.2rem;
    width: 1.9rem;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Numbers = () => (
  <Section noMarginBottom>
    <TextColumn>
      <CenteredDiv>
        <StyledDiv>
          <StyledIcon src={iconCommunities} alt="Communities Icon" />
          <H2 bigger open>
            1.4k+
          </H2>
        </StyledDiv>
        <H3 light textColor={colors.gray} open>
          Communities formed
        </H3>
      </CenteredDiv>
    </TextColumn>
    <TextColumn>
      <CenteredDiv>
        <StyledDiv>
          <StyledIcon src={iconMessages} alt="Messages Icon" />
          <H2 bigger open>
            2.7m+
          </H2>
        </StyledDiv>
        <H3 light textColor={colors.gray} open>
          Messages sent
        </H3>
      </CenteredDiv>
    </TextColumn>
  </Section>
)

export default Numbers
