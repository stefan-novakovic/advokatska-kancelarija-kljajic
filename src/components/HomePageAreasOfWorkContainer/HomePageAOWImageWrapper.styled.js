import styled from "styled-components";

export const StyledHomePageAOWImageWrapper = styled.div`
  width: 180px;
  height: 190px;
  background-image: url(${(props) => props.$placeholderImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  & > a:any-link {
    display: flex;
    transition: ease 0.75s;
  }

  & > a:hover,
  & > a:focus-visible {
    transform: scale(1.1);
    transition: ease 0.5s;
  }

  & > a > span > img {
    width: 180px;
    height: auto;
  }
`;
