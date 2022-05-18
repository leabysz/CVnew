import * as React from "react"
import { StyledBlock } from "./styled/block"

const Block = ({ isNegative = false, title, content, children }) => (
  <StyledBlock isNegative={isNegative}>
    <div>
      <h1>{title}</h1>
      {content && 
        <div>{content}</div>
      }
      {children && children}
    </div>
  </StyledBlock>
)

export default Block
