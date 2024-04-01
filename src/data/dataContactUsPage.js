import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";

export const ContactUsPageData = {
  SRB: {
    firstNameLabel: "Ime",
    lastNameLabel: "Prezime",
    emailLabel: "Email",
    messageLabel: "Vaše pitanje",
    pageTitle: "Kontakt",
    sentButtonText: "Pošalji",
    sentMessageText: "Forma je uspešno poslata.",
    linksArray: [
      {
        key: "cup_phone",
        icon: <HiOutlinePhone />,
        href: "tel:+381691669892",
        otherAttr: false,
        linkText: "069/166-98-92",
      },
      {
        key: "cup_email",
        icon: <GoMail />,
        href: "mailto:info@advokatkljajic.com",
        otherAttr: false,
        linkText: "info@advokatkljajic.com",
      },
      {
        key: "cup_facebook",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/AdvokatskakancelarijaKljajic",
        otherAttr: true,
        linkText: "Advokatska kancelarija Kljajić",
      },
      {
        key: "cup_instagram",
        icon: <SlSocialInstagram />,
        href: "https://www.instagram.com/advokatkljajic/",
        otherAttr: true,
        linkText: "advokatkljajic",
      },
      {
        key: "cup_location",
        icon: <SlLocationPin />,
        href: "https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5",
        otherAttr: true,
        linkText: "Šekspirova 11, Novi Sad",
      },
    ],
    facebookLinkText: "Advokatska kancelarija Kljajić",
    workingHoursLabel: "Ponedeljak—Petak:",
    workingHoursTimeText: "08—15h",
    yupRequired: "Obavezno polje",
    yupMin: "Uneli ste manje od 2 karaktera",
    yupMax: "Maksimalna dužina je 400 karaktera",
    yupEmail: "Neispravan email",
  },
  ENG: {
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    messageLabel: "Your question",
    pageTitle: "Contact",
    sentButtonText: "Send",
    sentMessageText: "The form has been successfully submitted.",
    linksArray: [
      {
        key: "cup_phone",
        icon: <HiOutlinePhone />,
        href: "tel:+381691669892",
        otherAttr: false,
        linkText: "069/166-98-92",
      },
      {
        key: "cup_email",
        icon: <GoMail />,
        href: "mailto:info@advokatkljajic.com",
        otherAttr: false,
        linkText: "info@advokatkljajic.com",
      },
      {
        key: "cup_facebook",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/AdvokatskakancelarijaKljajic",
        otherAttr: true,
        linkText: "Law Office Kljajić",
      },
      {
        key: "cup_instagram",
        icon: <SlSocialInstagram />,
        href: "https://www.instagram.com/advokatkljajic/",
        otherAttr: true,
        linkText: "advokatkljajic",
      },
      {
        key: "cup_location",
        icon: <SlLocationPin />,
        href: "https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5",
        otherAttr: true,
        linkText: "Šekspirova 11, Novi Sad",
      },
    ],
    facebookLinkText: "Law Office Kljajić",
    workingHoursLabel: "Monday—Friday:",
    yupRequired: "Required field",
    yupMin: "Minimum length is 2 characters",
    yupMax: "Maximum length is 400 characters",
    yupEmail: "Invalid email",
  },
};
