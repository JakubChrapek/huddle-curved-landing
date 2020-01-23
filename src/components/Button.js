import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledButton = styled.button`
  background-color: ${props => props.bgColor || "transparent"};
  color: ${props => props.textColor || colors.pink};
  font-size: ${props => (props.bigger ? "1.05rem" : "0.9rem")};
  font-weight: ${props => (props.bigger ? "600" : "400")};
  padding: ${props => (props.bigger ? "1.5rem 5.8rem" : "0.45rem 1.6rem")};
  border: 1px solid ${props => props.borderColor || colors.pink};
  box-shadow: ${props =>
    props.shadow
      ? `0px 2px 3px 0px rgba(0,0,0,0.2),
        0px 5px 8px 0px rgba(0,0,0,0.15)`
      : `none`};

  position: relative;
  display: inline-block;
  max-width: 22rem;
  overflow: hidden;
  border-radius: 2rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  :after,
  :before {
    content: "";
    width: ${props => (props.bigger ? "0.7rem" : "0.4rem")};
    height: 2px;
    position: absolute;
    right: ${props => (props.bigger ? "2.5rem" : "0.7rem")};
    background-color: ${props => props.textColor || colors.pink};
    transition: transform 0.2s ease-in-out;
  }
  :after {
    bottom: ${props => (props.bigger ? "calc(50% + 0.15rem)" : "50%")};
    transform: translateX(3.2rem) rotate(45deg);
  }
  :before {
    bottom: ${props =>
      props.bigger ? "calc(50% - 0.35rem)" : "calc(50% - 0.2rem)"};
    transform: translateX(3.2rem) rotate(-45deg);
  }

  :hover {
    color: ${props =>
      props.textColor == colors.white ? colors.white : colors.hoverPink};
    border: 1px solid ${colors.hoverPink};
  }
  :hover:after {
    transform: translateX(0) rotate(45deg);
  }

  :hover:before {
    transform: translateX(0) rotate(-45deg);
  }
`

const Button = ({
  children,
  bgColor,
  textColor,
  borderColor,
  bigger,
  shadow,
}) => (
  <>
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
      bigger={bigger}
      shadow={shadow}
    >
      {children}
    </StyledButton>
  </>
)

export default Button
