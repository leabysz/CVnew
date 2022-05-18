import styled from "@emotion/styled"

export const StyledTitle = styled.h1`
  font-size: 23vh;
  line-height: 23vh;
  display: block;
  text-align: left;
  font-weight: bold;
  user-select: none;

  @media screen and (max-width: 1120px) {
    font-size: 15vw;
    line-height: 15vw;
    letter-spacing: -2px;
  }

  @media only print {
    display: none;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 4.2vh;
  display: block;
  text-align: left;
  font-weight: bold;
  user-select: none;

  @media screen and (max-width: 1120px) {
    font-size: 5.5vw;
    line-height: 5.75vw;
  }

  @media only print {
    font-size: 30px;
    line-height: 35px;
  }
`;
