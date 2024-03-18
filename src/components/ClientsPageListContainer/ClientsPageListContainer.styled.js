import styled from "styled-components";

const ClientsListContainer = styled.ul`
  color: ${({ theme }) => theme.colors.veryLightBlue};
  list-style-type: none;
  width: 100%;
  max-width: min(76vw, 1500px);
  margin-inline: auto;

  li {
    font-size: 1.55rem;
    font-weight: 400;
    line-height: 1.32;
    margin-bottom: 2.6rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1536px) {
    max-width: 88vw;
  }

  @media screen and (max-width: 767px) {
    li {
      font-size: 1.35rem;
    }
  }
`;

export default ClientsListContainer;
