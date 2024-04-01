import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";

export const HeaderAndFooterData = {
  SRB: {
    navMenuObj: {
      home: "POČETNA",
      aboutUs: "O NAMA",
      areasOfWork: "OBLASTI RADA",
      clients: "KLIJENTI",
      usefulLinks: "KORISNI LINKOVI",
      contact: "KONTAKT",
    },
    footerIconArray: [
      {
        key: "f_phone",
        title: "Pozovite nas",
        icon: <HiOutlinePhone />,
        href: "tel:+381691669892",
        otherAttr: false,
      },
      {
        key: "f_email",
        title: "Pošaljite nam email",
        icon: <GoMail />,
        href: "mailto:info@advokatkljajic.com",
        otherAttr: false,
      },
      {
        key: "f_facebook",
        title: "Posetite naš Facebook",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/AdvokatskakancelarijaKljajic",
        otherAttr: true,
      },
      {
        key: "f_instagram",
        title: "Posetite naš Instagram",
        icon: <SlSocialInstagram />,
        href: "https://www.instagram.com/advokatkljajic/",
        otherAttr: true,
      },
      {
        key: "f_location",
        title: "Naša lokacija",
        icon: <SlLocationPin />,
        href: "https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5",
        otherAttr: true,
      },
    ],
    footerFirmText: "Advokatska kancelarija Kljajić",
  },
  ENG: {
    navMenuObj: {
      home: "HOME",
      aboutUs: "ABOUT US",
      areasOfWork: "PRACTICE AREAS",
      clients: "CLIENTS",
      usefulLinks: "USEFUL LINKS",
      contact: "CONTACT",
    },
    footerIconArray: [
      {
        key: "f_phone",
        title: "Call us",
        icon: <HiOutlinePhone />,
        href: "tel:+381691669892",
        otherAttr: false,
      },
      {
        key: "f_email",
        title: "Send us an email",
        icon: <GoMail />,
        href: "mailto:info@advokatkljajic.com",
        otherAttr: false,
      },
      {
        key: "f_facebook",
        title: "Visit our Facebook page",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/AdvokatskakancelarijaKljajic",
        otherAttr: true,
      },
      {
        key: "f_instagram",
        title: "Visit our Instagram profile",
        icon: <SlSocialInstagram />,
        href: "https://www.instagram.com/advokatkljajic/",
        otherAttr: true,
      },
      {
        key: "f_location",
        title: "Our location",
        icon: <SlLocationPin />,
        href: "https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5",
        otherAttr: true,
      },
    ],
    footerFirmText: "Law Office Kljajić",
  },
};

export const NavListItemArray = [
  { link: "/", itemClassName: "pocetna", name: "home" },
  { link: "/o-nama", itemClassName: "o-nama", name: "aboutUs" },
  {
    link: "/oblasti-rada",
    itemClassName: "oblasti-rada",
    name: "areasOfWork",
  },
  { link: "/klijenti", itemClassName: "klijenti", name: "clients" },
  {
    link: "/korisni-linkovi",
    itemClassName: "korisni-linkovi",
    name: "usefulLinks",
  },
  { link: "/kontakt", itemClassName: "kontakt", name: "contact" },
];
