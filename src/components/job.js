import * as React from "react"
import { StyledJob } from "./styled/job"

const Job = ({ isNegative = false, title, children }) => (
  <StyledJob isNegative={isNegative}>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  </StyledJob>
)

export default Job
