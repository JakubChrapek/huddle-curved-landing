import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"
import Logo from "../../static/logo.svg"
import Button from "./Button"

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem 0;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  @media (max-width: 1140px) {
    margin: 0 3rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`

const StyledImg = styled.img`
  width: 13rem;
  @media (max-width: 768px) {
    width: 7rem;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledWrapper>
      <h1>
        <Link to="/">
          <StyledImg src={Logo} alt="Huddle" />
        </Link>
      </h1>
      <Button bgColor={colors.white} textColor={colors.pink}>
        Try it free
      </Button>
    </StyledWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
