import styled from "@emotion/styled"

export const StyledReferences = styled.dl`
  line-height: 1.5em;

  div + div {
    margin-top: 1.75rem;
  }

  dd {
    margin-top: .25rem;
  }

  a {
    word-break: keep-all;
    word-wrap: unset;
  }
`;
