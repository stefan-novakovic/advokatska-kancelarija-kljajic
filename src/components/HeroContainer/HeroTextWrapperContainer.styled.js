import styled from "styled-components";

const HeroTextWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 7.5rem 1.75rem;
  backdrop-filter: brightness(78%);
  -webkit-backdrop-filter: brightness(78%);

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    text-shadow: -3px 3px 5px ${({ theme }) => theme.colors.black};
    letter-spacing: 1.25px;
  }

  h2 {
    font-weight: 700;
    margin-top: 1.75rem;
    font-size: 7.25rem;
    letter-spacing: 3.5px;
  }

  @media screen and (max-width: 767px) {
    h1,
    h2 {
      color: ${({ theme }) => theme.colors.veryLightBlue};
      font-size: 10vw;
      letter-spacing: 0.75px;
    }

    h2 {
      margin-top: 1rem;
      font-size: 20vw;
      letter-spacing: 2.5px;
    }
  }
`;

export default HeroTextWrapperContainer;
