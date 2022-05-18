import * as React from "react"
import { StyledInlineList } from "./styled/inlineList"

const InlineList = ({ isNegative = false, title, items }) => (
  <StyledInlineList isNegative={isNegative}>
    <h2>{title}:</h2>
    <ul>
      {items && items.map((item, index) =>
        <li key={index}>{item}</li>
      )}
    </ul>
  </StyledInlineList>
)

export default InlineList
