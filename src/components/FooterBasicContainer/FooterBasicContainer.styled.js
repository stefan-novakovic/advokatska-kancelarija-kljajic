import styled from "styled-components";

const StyledFooterBasicContainer = styled.div`
  display: flex;
  gap: 1.4rem;

  a {
    display: block;
    font-size: 0px;
  }
  svg {
    width: auto;
    height: 35px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  svg:hover,
  svg:focus-visible {
    transform: scale(1.075);
  }

  svg:active path {
    filter: brightness(80%);
  }
`;

export default StyledFooterBasicContainer;
