import { StyledFooter } from "./Footer.styled";
import StyledFooterInfoContainer from "../../components/FooterInfoContainer/FooterInfoContainer";
import StyledFooterBasicContainer from "../../components/FooterBasicContainer/FooterBasicContainer.styled";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  const dateObj = new Date();
  return (
    <StyledFooter>
      <StyledFooterInfoContainer>
        <StyledFooterBasicContainer>
          <a href="tel:+381691669892" title="Pozovite nas">
            <HiOutlinePhone />
          </a>

          <a href="mailto:info@advokatkljajic.com" title="Pošaljite nam email">
            <GoMail />
          </a>

          <a
            href="https://www.facebook.com/AdvokatskakancelarijaKljajic"
            target="_blank"
            rel="noopener noreferrer"
            title="Posetite naš Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/advokatkljajic/"
            target="_blank"
            rel="noopener noreferrer"
            title="Posetite naš Instagram"
          >
            <SlSocialInstagram />
          </a>

          <a
            href="https://maps.app.goo.gl/4X1bggfi8QuYyg5RA"
            target="_blank"
            rel="noopener noreferrer"
            title="Naša lokacija"
          >
            <SlLocationPin />
          </a>
        </StyledFooterBasicContainer>
      </StyledFooterInfoContainer>
      <p>
        Copyright &copy; {dateObj.getFullYear()}{" "}
        <span>Advokatska kancelarija Kljajić</span>
      </p>
    </StyledFooter>
  );
};

export default Footer;
