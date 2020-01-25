import React from "react"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import styled from "styled-components"
import H2 from "../components/H2"
import P from "../components/P"
import CenteredDiv from "../components/CenteredDiv"
import Illustration from "../components/Illustration"
import SVGImage from "../components/SVGImage"
import usersImage from "../../static/illustration-your-users.svg"
import usersBgTop from "../../static/bg-section-top-desktop-2.svg"
import usersBgBottom from "../../static/bg-section-bottom-desktop-2.svg"
import { colors } from "../utils/colors"

const UsersSection = () => (
  <>
    <SVGImage src={usersBgTop} alt="" />
    <CenteredDiv bgColor={colors.sectionBlue}>
      <Section smallerMargin>
        <TextColumn left text>
          <H2>Your Users</H2>
          <P>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </P>
        </TextColumn>
        <TextColumn right>
          <Illustration src={usersImage} alt="Grow Illustration" />
        </TextColumn>
      </Section>
    </CenteredDiv>
    <SVGImage src={usersBgBottom} alt="" />
  </>
)

export default UsersSection
