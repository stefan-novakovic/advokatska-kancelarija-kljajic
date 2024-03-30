import styled from "styled-components";

export const StyledFooterIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  width: 100%;
  margin-bottom: 1.4rem;

  & > a {
    display: block;
    font-size: 0px;
  }

  & > a > svg {
    width: auto;
    height: 35px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  & > a > svg:hover,
  & > a > svg:focus-visible {
    transform: scale(1.075);
  }

  & > a > svg:active path {
    filter: brightness(80%);
  }
`;
