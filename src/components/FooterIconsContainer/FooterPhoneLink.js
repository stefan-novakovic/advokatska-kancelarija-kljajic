import { HiOutlinePhone } from "react-icons/hi";

const FooterPhoneLink = ({ phoneTitle }) => {
  return (
    <a href="tel:+381691669892" title={phoneTitle}>
      <HiOutlinePhone />
    </a>
  );
};

export default FooterPhoneLink;
