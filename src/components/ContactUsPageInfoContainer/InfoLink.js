import { StyledInfoLink } from "./InfoLink.styled";

const InfoLink = ({ linkObj }) => {
  return (
    <StyledInfoLink
      data-aos="fade-left"
      href={linkObj.href}
      target={linkObj.otherAttr ? "_blank" : null}
      rel={linkObj.otherAttr ? "noopener noreferrer" : null}
    >
      {linkObj.icon}
      <span>{linkObj.linkText}</span>
    </StyledInfoLink>
  );
};

export default InfoLink;
