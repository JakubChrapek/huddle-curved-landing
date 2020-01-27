import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import TextColumn from "../components/TextColumn"
import ContactFrom from "../components/ContactForm"
import Logo from "../../static/logo.svg"
import Email from "../../static/icon-email.svg"
import Phone from "../../static/icon-phone.svg"
import { colors } from "../utils/colors"
import SVGImage from "../components/SVGImage"
import bgFooterDesktop from "../../static/bg-footer-top-desktop.svg"
import bgFooterMobile from "../../static/bg-footer-top-mobile.svg"
import { FaFacebookF, FaRocket, FaInstagram } from "react-icons/fa"

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor || "white"};
`
const SquishedFooterText = styled.p`
  font-size: 0.85rem;
  letter-spacing: -0.5px;
  font-weight: 600;
  line-height: 1.4rem;
  color: ${colors.white};
  margin-bottom: 2.2rem;
  width: 65%;
  min-width: 325px;
  @media (max-width: 767px) {
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.5rem;
    min-width: unset;
    width: 100%;
    margin-bottom: 2rem;
  }
`

const ContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: 767px) {
    align-self: flex-start;
  }
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  color: ${colors.white};
  margin-bottom: 0.8rem;
`

const StyledIcon = styled.img`
  width: 1rem;
  vertical-align: middle;
`

const StyledLink = styled.a`
  font-size: 0.9rem;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 1.2rem;
  position: relative;

  :before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  :hover:before {
    transform: scaleX(1);
  }
`
const WhiteLogo = styled.img`
  width: 14rem;
  filter: brightness(0) invert(1);
  margin-bottom: 1.6rem;
  @media (max-width: 767px) {
    width: 12rem;
    align-self: flex-start;
    margin-bottom: 1rem;
  }
`

const StyledSocialList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

const StyledSocialIcon = styled.li`
  display: flex;
  justify-content: ${props => (props.alignRight ? `flex-end` : `center`)};
  align-items: center;
  border: ${props => (props.bgColor ? `none` : `1px solid ${colors.white}`)};
  background-color: ${props => props.bgColor || colors.white};
  border-radius: 2px;
  margin: 3.5rem 1.6rem 0 0;
  width: 1.9rem;
  height: 1.9rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: scale(0.9);
    border-color: ${props => (props.bgColor ? `none` : `${colors.pink}`)};
    background-color: ${props => props.bgColor || colors.pink};
  }

  :hover svg path {
    fill: ${props => (props.bgColor ? `${colors.pink}` : `${colors.white}`)};
  }
  svg {
    vertical-align: middle;
    width: ${props => (props.bigger ? `2.5rem` : `1.4rem`)};
    height: ${props => (props.bigger ? `2.5rem` : `1.4rem`)};
    path {
      fill: ${props =>
        props.bgColor ? `${colors.white}` : `${colors.darkCyan}`};
      transition: fill 0.2s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    margin: 2.5rem 1.2rem 0 0;
    width: 1.45rem;
    height: 1.45rem;
    svg {
      width: ${props => (props.bigger ? `1.8rem` : `1rem`)};
      height: ${props => (props.bigger ? `1.8rem` : `1rem`)};
    }
  }
`

const NewsletterHeader = styled.h3`
  font-size: 1.3rem;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1.9rem;
  @media (max-width: 767px) {
    font-size: 1.25rem;
    align-self: flex-start;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`

const Footer = () => (
  <>
    <SVGImage src={bgFooterDesktop} srcMobile={bgFooterMobile} alt="" />
    <FooterWrapper bgColor={colors.darkCyan}>
      <Section top smallerMargin>
        <TextColumn left text marginTop="6rem">
          <WhiteLogo src={Logo} alt="Huddle" />
          <SquishedFooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </SquishedFooterText>
          <ContactList>
            <StyledListItem>
              <StyledIcon src={Phone} />
              <StyledLink href="tel:+1-543-123-4567">
                Phone: +1-543-123-4567
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon src={Email} />
              <StyledLink href="mailto:example@huddle.com">
                example@huddle.com
              </StyledLink>
            </StyledListItem>
          </ContactList>
          <StyledSocialList>
            <StyledSocialIcon
              alignRight
              as="a"
              href="https://facebook.com/kryptonum"
              target="blank"
            >
              <FaFacebookF />
            </StyledSocialIcon>
            <StyledSocialIcon
              bigger
              bgColor={colors.darkCyan}
              as="a"
              href="https://instagram.com/kryptonum.studio"
              target="blank"
            >
              <FaInstagram />
            </StyledSocialIcon>
            <StyledSocialIcon
              as="a"
              href="https://kryptonumstudio.com/en/kryptonum-studio/"
              target="blank"
            >
              <FaRocket />
            </StyledSocialIcon>
          </StyledSocialList>
        </TextColumn>
        <TextColumn right text first>
          <NewsletterHeader>Newsletter</NewsletterHeader>
          <SquishedFooterText>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </SquishedFooterText>
          <ContactFrom />
        </TextColumn>
      </Section>
    </FooterWrapper>
  </>
)

export default Footer
