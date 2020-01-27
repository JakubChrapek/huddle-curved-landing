import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledForm = styled.form`
  display: flex;
  flex-wrap: 0 0 wrap;
  width: 100%;

  > div {
    flex-grow: 5;
    input {
      width: 90%;
      border-radius: 5px;
      box-shadow: none;
      border: 0;
      font-size: 1.1rem;
      padding: 0.6rem 0.8rem;
      color: ${colors.headerBlack};
      border: 2px solid ${colors.white};
      transition: border-color 0.15s ease-in-out;

      :hover::placeholder {
        color: ${colors.headerBlack};
      }
      ::placeholder {
        color: ${colors.textBlack};
        transition: color 0.2s ease-in-out;
      }
      :focus,
      :active {
        border: 2px solid ${colors.pink};
      }
    }
  }

  > button {
    position: relative;
    flex-grow: 4;
    border-radius: 5px;
    border: 2px solid ${colors.pink};
    background-color: ${colors.pink};
    border: 0;
    color: ${colors.white};
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out;

    :focus,
    :active {
      border: 2px solid ${colors.white};
    }
    :after,
    :before {
      content: "";
      width: 0.4rem;
      height: 2px;
      position: absolute;
      right: 0.7rem;
      background-color: ${colors.white};
      transition: transform 0.2s ease-in-out;
    }

    :after {
      bottom: 50%;
      transform: translateX(1.2rem) rotate(45deg);
    }
    :before {
      bottom: calc(50% - 0.2rem);
      transform: translateX(1.2rem) rotate(-45deg);
    }

    :hover:after {
      transform: translateX(-0.6rem) rotate(45deg);
    }

    :hover:before {
      transform: translateX(-0.6rem) rotate(-45deg);
    }
  }
`
const ContactForm = () => (
  <StyledForm name="Contact Form" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="Contact Form" />
    <div>
      <input type="email" name="email" placeholder="email" />
    </div>
    <button type="submit">Subscribe</button>
  </StyledForm>
)

export default ContactForm
