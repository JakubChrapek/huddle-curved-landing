import React from "react"
import styled from "styled-components"

const StyledIllustration = styled.img`
  max-width: 100%;
  width: 90%;
`

const Illustration = ({ src }) => <StyledIllustration src={src} />

export default Illustration
