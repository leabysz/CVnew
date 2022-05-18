import * as React from "react"
import { StyledReferences } from "./styled/references"

const References = ({ referenceList }) => (
  <StyledReferences>
    {referenceList && referenceList.map(
      (reference, index) => (
        <div key={index}>
          <dt>
            {`${reference.name} | ${reference.position} @ `}
            <a href={reference.companyLink} rel="noreferrer" title={`visit ${reference.company} homepage`} target="_blank">
              {reference.company}
            </a>
          </dt>
          <dd>
            {reference.email &&
              <a href={`mailto:${reference.email}`} rel="noreferrer" title={`mail ${reference.name}`} target="_blank">
                {reference.email}
              </a>
            }
            {reference.email && reference.phone && ` | `}
            {reference.phone &&
              <a href={`tel:${reference.phone}`} rel="noreferrer" title={`call ${reference.name}`}>
                {`${reference.phone}`}
              </a>
            }
          </dd>
        </div>
      )
    )}
  </StyledReferences>
)

export default References
