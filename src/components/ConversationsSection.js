import React from "react"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import H2 from "../components/H2"
import P from "../components/P"
import CenteredDiv from "../components/CenteredDiv"
import Illustration from "../components/Illustration"
import flowImage from "../../static/illustration-flowing-conversation.svg"

const ConversationsSection = () => (
  <CenteredDiv>
    <Section biggerMargin>
      <TextColumn left>
        <Illustration
          src={flowImage}
          alt="Flowing Conversations Illustration"
        />
      </TextColumn>
      <TextColumn right text>
        <H2>Flowing Conversations</H2>
        <P>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </P>
      </TextColumn>
    </Section>
  </CenteredDiv>
)

export default ConversationsSection
