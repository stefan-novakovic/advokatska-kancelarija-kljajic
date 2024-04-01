import styled from "styled-components";

export const StyledInfoWorkingHoursText = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  min-width: 342px;
  color: ${({ theme }) => theme.colors.veryLightBlue};
  font-size: 1.2rem;
  letter-spacing: 0.75px;

  & > svg {
    width: auto;
    height: 35px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    margin-right: 1rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.05rem;
    min-width: auto;

    & > svg {
      width: auto;
      height: 30px;
      margin-right: 0.75rem;
    }
  }
`;
