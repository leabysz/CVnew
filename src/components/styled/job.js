import styled from "@emotion/styled"

export const StyledJob = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 20vh;
  background: ${(props) => props.isNegative ? `var(--color-main)` : `transparent`}; 
  color: ${(props) => props.isNegative ? `#fff` : `var(--color-main)`}; 
  
  + article {
    margin-top: 1.5rem;
  }

  @media only print {
    page-break-inside: avoid;
  }
`;
