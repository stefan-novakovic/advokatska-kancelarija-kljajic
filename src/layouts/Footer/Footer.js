import { StyledFooter } from "./Footer.styled";
import StyledFooterInfoContainer from "../../components/FooterInfoContainer/FooterInfoContainer.styled";
import StyledFooterBasicContainer from "../../components/FooterBasicContainer/FooterBasicContainer.styled";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const Footer = () => {
  const { language } = useDataContext();
  const dateObj = new Date();
  return (
    <StyledFooter>
      <StyledFooterInfoContainer>
        <StyledFooterBasicContainer>
          <a
            href="tel:+381691669892"
            title={HeaderAndFooterData[`${language}`].footerIconTitlesObj.phone}
          >
            <HiOutlinePhone />
          </a>

          <a
            href="mailto:info@advokatkljajic.com"
            title={HeaderAndFooterData[`${language}`].footerIconTitlesObj.email}
          >
            <GoMail />
          </a>

          <a
            href="https://www.facebook.com/AdvokatskakancelarijaKljajic"
            target="_blank"
            rel="noopener noreferrer"
            title={
              HeaderAndFooterData[`${language}`].footerIconTitlesObj.facebook
            }
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/advokatkljajic/"
            target="_blank"
            rel="noopener noreferrer"
            title={
              HeaderAndFooterData[`${language}`].footerIconTitlesObj.instagram
            }
          >
            <SlSocialInstagram />
          </a>

          <a
            href="https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5"
            target="_blank"
            rel="noopener noreferrer"
            title={
              HeaderAndFooterData[`${language}`].footerIconTitlesObj.location
            }
          >
            <SlLocationPin />
          </a>
        </StyledFooterBasicContainer>
      </StyledFooterInfoContainer>
      <p>
        Copyright &copy; {dateObj.getFullYear()}{" "}
        <span>{HeaderAndFooterData[`${language}`].footerFirmText}</span>
      </p>
    </StyledFooter>
  );
};

export default Footer;
