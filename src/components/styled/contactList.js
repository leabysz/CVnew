import styled from "@emotion/styled"

export const StyledContactList = styled.div`
  a {
    margin: .25rem;
    display: inline-block;
    border: 1px solid var(--color-secondary);
    background: var(--color-secondary); 
    color: #fff; 
    font-family: var(--font-feature);
    padding: .2rem .4rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    :hover {
      border-color: var(--color-secondary);
      background: ${(props) => props.isNegative ? `var(--color-secondary)` : `transparent`}; 
      color: ${(props) => props.isNegative ? `#fff` : `var(--color-secondary)`}; 
    }
  }

  @media screen and (max-width: 1120px) {
    a {
      display: block;
      margin: .5rem 0;
    }
  }

  @media only print {
    a {
      background: transparent; 
      color: var(--color-main);
      padding: 0;
      border: 0;
      border-bottom: 1px solid var(--color-main);

      + a {
        margin-left: 25px;
      }
    }
  }
`;
