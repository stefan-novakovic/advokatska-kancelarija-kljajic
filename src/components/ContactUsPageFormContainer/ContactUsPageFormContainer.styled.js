import styled from "styled-components";

export const StyledContactUsPageFormContainer = styled.form`
  width: 100%;
  max-width: 600px;

  & > div {
    width: 100%;
  }

  & > p {
    width: 100%;
    margin-bottom: 0.25rem;
    font-weight: 400;
    line-height: 2.25;
    height: 36px;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 820px;
  }
`;
