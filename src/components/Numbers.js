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
  align-self: flex-start;
  margin-bottom: 1rem;
`

const Numbers = () => (
  <Section>
    <TextColumn>
      <CenteredDiv>
        <StyledIcon src={iconCommunities} alt="Communities Icon" />
        <H2 bigger open>
          1.4k+
        </H2>
        <H3 light textColor={colors.gray} open>
          Communities formed
        </H3>
      </CenteredDiv>
    </TextColumn>
    <TextColumn>
      <CenteredDiv>
        <StyledIcon src={iconMessages} alt="Messages Icon" />
        <H2 bigger open>
          2.7m+
        </H2>
        <H3 light textColor={colors.gray} open>
          Messages sent
        </H3>
      </CenteredDiv>
    </TextColumn>
  </Section>
)

export default Numbers
