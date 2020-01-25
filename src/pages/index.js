import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Ready from "../components/Ready"
import Numbers from "../components/Numbers"
import GrowSection from "../components/GrowSection"
import ConversationsSection from "../components/ConversationsSection"
import UsersSection from "../components/UsersSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Numbers />
    <GrowSection />
    <ConversationsSection />
    <UsersSection />
    <Ready />
  </Layout>
)

export default IndexPage
