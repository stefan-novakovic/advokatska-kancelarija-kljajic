import styled from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 460px;
  aspect-ratio: 460/587.13;
  border-radius: 10px 10px 0 0;
  background-color: rgba(242, 246, 249, 0.06);
  background-image: url(${(props) => props.$placeholderImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  box-shadow: 0 1px 4px -1px ${({ theme }) => theme.colors.black};

  & > span > img {
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.black};
  }
`;
