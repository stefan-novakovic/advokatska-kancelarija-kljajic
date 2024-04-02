import { StyledUsefulLinksPageItemContainer } from "./UsefulLinksPageItemContainer.styled";

const UsefulLinksPageItemContainer = ({ column }) => {
  return (
    <StyledUsefulLinksPageItemContainer>
      {column.map((link, index) => (
        <li key={`link${index}`} data-aos="fade-left">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        </li>
      ))}
    </StyledUsefulLinksPageItemContainer>
  );
};

export default UsefulLinksPageItemContainer;
