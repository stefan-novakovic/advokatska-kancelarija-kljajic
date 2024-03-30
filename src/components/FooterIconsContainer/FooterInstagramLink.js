import { SlSocialInstagram } from "react-icons/sl";

const FooterInstagramLink = ({ instagramTitle }) => {
  return (
    <a
      href="https://www.instagram.com/advokatkljajic/"
      target="_blank"
      rel="noopener noreferrer"
      title={instagramTitle}
    >
      <SlSocialInstagram />
    </a>
  );
};

export default FooterInstagramLink;
