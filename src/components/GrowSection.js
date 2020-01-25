import React from "react"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import H2 from "../components/H2"
import P from "../components/P"
import CenteredDiv from "../components/CenteredDiv"
import Illustration from "../components/Illustration"
import SVGImage from "../components/SVGImage"
import growImage from "../../static/illustration-grow-together.svg"
import growBgTop from "../../static/bg-section-top-desktop-1.svg"
import growBgBottom from "../../static/bg-section-bottom-desktop-1.svg"
import { colors } from "../utils/colors"

const GrowSection = () => (
  <>
    <SVGImage src={growBgTop} alt="" />
    <CenteredDiv bgColor={colors.sectionBlue}>
      <Section smallerMargin>
        <TextColumn left text>
          <H2>Grow Together</H2>
          <P>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </P>
        </TextColumn>
        <TextColumn right>
          <Illustration src={growImage} alt="Grow Illustration" />
        </TextColumn>
      </Section>
    </CenteredDiv>
    <SVGImage src={growBgBottom} alt="" />
  </>
)

export default GrowSection
