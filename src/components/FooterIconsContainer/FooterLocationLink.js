import { SlLocationPin } from "react-icons/sl";

const FooterLocationLink = ({ locationTitle }) => {
  return (
    <a
      href="https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5"
      target="_blank"
      rel="noopener noreferrer"
      title={locationTitle}
    >
      <SlLocationPin />
    </a>
  );
};

export default FooterLocationLink;
