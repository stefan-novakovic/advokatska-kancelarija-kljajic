const FooterLink = ({ iconObj }) => {
  return (
    <a
      href={iconObj.href}
      title={iconObj.title}
      target={iconObj.otherAttr ? "_blank" : null}
      rel={iconObj.otherAttr ? "noopener noreferrer" : null}
    >
      {iconObj.icon}
    </a>
  );
};

export default FooterLink;
