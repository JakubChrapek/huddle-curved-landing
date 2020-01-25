import React from "react"
import styled from "styled-components"

const StyledSVGImage = styled.img`
  width: 100%;
`

const SVGImage = ({ src }) => <StyledSVGImage src={src} />

export default SVGImage
