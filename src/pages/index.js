import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import H2 from "../components/H2"
import H3 from "../components/H3"
import P from "../components/P"
import growImage from "../../static/illustration-grow-together.svg"
import iconCommunities from "../../static/icon-communities.svg"
import iconMessages from "../../static/icon-messages.svg"
import { colors } from "../utils/colors"
import styled from "styled-components"

const StyledIcon = styled.img`
  width: 2.6rem;
  align-self: flex-start;
  margin-bottom: 1rem;
`

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledIllustration = styled.img`
  max-width: 100%;
  width: 90%;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
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
    <Section>
      <TextColumn left>
        <H2>Grow Together</H2>
        <P>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </P>
      </TextColumn>
      <TextColumn right>
        <StyledIllustration src={growImage} alt="Grow Illustration" />
      </TextColumn>
    </Section>
  </Layout>
)

export default IndexPage
