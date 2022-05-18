import styled from "@emotion/styled"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;  
  flex-direction: column;
  padding: 2rem;
  height: ${(props) => props.isPrint ? `auto` : `calc(100vh - 2rem)`};
  
  .print-title {
    display: none;
  }

  > div {
    max-width: 960px;
    margin-left: 10vw;
  }

  &:before {
    content: "";
    display: block;
    width: 8px;
    background: var(--color-main);
    height: 100%;
    position: absolute;
    left: 5vw;
    top: 0;
  }

  @media screen and (max-width: 1120px) {
    > div {
      max-width: 960px;
      margin-left: 0;
    }
   
    &:before {
      content: "";
      display: block;
      width: 8px;
      background: var(--color-main);
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media only print {
    height: 45vh;

    .print-title {
      font-family: var(--font-feature);
      display: block;
      font-size: 50px;
      line-height: 60px;
      display: block;
      text-align: left;
      font-weight: bold;
      user-select: none;
    }

    > div {
      max-width: 100%;
      margin-left: 0;
    }

    &:before {
      content: "";
      display: none;
    }
  }
`;

export default StyledHeader;