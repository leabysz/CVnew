import styled from "@emotion/styled"

export const StyledInlineList = styled.div`
  ul {
    display: block;
    margin-left: 0;
  
    li {
      margin: .25rem;
      display: inline-block;
      border: 1px solid var(--color-main);
      background: ${(props) => props.isNegative ? `var(--color-main)` : `transparent`}; 
      color: ${(props) => props.isNegative ? `#fff` : `var(--color-main)`}; 
      font-family: var(--font-feature);
      padding: .2rem .4rem;
      font-size: 1.3rem;
      cursor: default;
      transition: all 300ms ease-in-out;

      :hover {
        border-color: var(--color-secondary);
        background: ${(props) => props.isNegative ? `var(--color-secondary)` : `transparent`}; 
        color: ${(props) => props.isNegative ? `#fff` : `var(--color-secondary)`}; 
      }
    }
  }

  @media only print {
    ul li {
      background: transparent; 
      color: var(--color-main); 
    }
  }
`;
