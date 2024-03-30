import { FaFacebookF } from "react-icons/fa";

const FooterFacebookLink = ({ facebookTitle }) => {
  return (
    <a
      href="https://www.facebook.com/AdvokatskakancelarijaKljajic"
      target="_blank"
      rel="noopener noreferrer"
      title={facebookTitle}
    >
      <FaFacebookF />
    </a>
  );
};

export default FooterFacebookLink;
