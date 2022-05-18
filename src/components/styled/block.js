import styled from "@emotion/styled"

export const StyledBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 20vh;
  padding: 2rem;  
  background: ${(props) => props.isNegative ? `var(--color-main)` : `transparent`}; 
  color: ${(props) => props.isNegative ? `#fff` : `var(--color-main)`}; 

  > div {
    max-width: 960px;
    width: 100%;
    margin-left: 10vw;
  }

  @media screen and (max-width: 1120px) {
    padding: 1.5rem;

    > div {
      margin-left: 0;
    }
  }

  @media only print {
    min-height: ${(props) => props.isNegative ? `0` : `100vh`};   
    page-break-before: ${(props) => props.isNegative ? `none` : `always`}; 
    background: transparent; 
    color: var(--color-main); 

    > div {
      margin-left: 0;
    }
  }

`;
