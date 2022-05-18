import * as React from "react"
import StyledHeader from "./styled/header"
import { StyledTitle, StyledSubtitle } from "./styled/title"
import Typewriter from 'typewriter-effect';

const titleText = "Hi, I'm Bruno";

const Header = ({ siteTitle, siteDescription }) => (
  <StyledHeader>
    <div>
      <StyledTitle>
        <Typewriter options={{ strings: [titleText], loop: true, autoStart: true }} />
      </StyledTitle>
      <span className="print-title">{titleText}</span>
      <StyledSubtitle>{siteDescription}</StyledSubtitle>
    </div>
  </StyledHeader>
)

export default Header
