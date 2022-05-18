import * as React from "react"
import { StyledContactList } from "./styled/contactList"

const Contact = ({ contactInfo }) => (
  <StyledContactList>
    <a href={`mailto:${contactInfo.email}`} title="Contact me over mail" rel="noreferrer" target="_blank">E-Mail: {contactInfo.email}</a>
    <a href={`tel:${contactInfo.phone}`} title="Contact me over phone" rel="noreferrer" target="_blank">Phone: {contactInfo.phone}</a>
    <a href={`${contactInfo.linkedin}`} title="Find me in LinkedIn" rel="noreferrer" target="_blank">LinkedIn</a>
  </StyledContactList>
)

export default Contact
