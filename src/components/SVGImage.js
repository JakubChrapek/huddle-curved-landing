import React from "react"
import styled from "styled-components"
import Media from "react-media"

const StyledSVGImage = styled.img`
  width: 100%;
`

const SVGImage = ({ src, srcMobile }) => (
  <Media query="(max-width: 768px)">
    {matches =>
      matches ? (
        <StyledSVGImage src={srcMobile} />
      ) : (
        <StyledSVGImage src={src} />
      )
    }
  </Media>
)

export default SVGImage
