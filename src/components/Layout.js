import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:700&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 0; 
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
