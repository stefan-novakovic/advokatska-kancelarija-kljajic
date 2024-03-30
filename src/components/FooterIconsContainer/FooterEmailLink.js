import { GoMail } from "react-icons/go";

const FooterEmailLink = ({ emailTitle }) => {
  return (
    <a href="mailto:info@advokatkljajic.com" title={emailTitle}>
      <GoMail />
    </a>
  );
};

export default FooterEmailLink;
