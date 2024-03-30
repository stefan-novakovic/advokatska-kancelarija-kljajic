import { StyledFooterIconsContainer } from "./FooterIconsContainer.styled";
import FooterPhoneLink from "./FooterPhoneLink";
import FooterEmailLink from "./FooterEmailLink";
import FooterFacebookLink from "./FooterFacebookLink";
import FooterInstagramLink from "./FooterInstagramLink";
import FooterLocationLink from "./FooterLocationLink";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const FooterIconsContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledFooterIconsContainer>
      <FooterPhoneLink
        phoneTitle={
          HeaderAndFooterData[`${language}`].footerIconTitlesObj.phone
        }
      />

      <FooterEmailLink
        emailTitle={
          HeaderAndFooterData[`${language}`].footerIconTitlesObj.email
        }
      />

      <FooterFacebookLink
        facebookTitle={
          HeaderAndFooterData[`${language}`].footerIconTitlesObj.facebook
        }
      />

      <FooterInstagramLink
        instagramTitle={
          HeaderAndFooterData[`${language}`].footerIconTitlesObj.instagram
        }
      />

      <FooterLocationLink
        locationTitle={
          HeaderAndFooterData[`${language}`].footerIconTitlesObj.location
        }
      />
    </StyledFooterIconsContainer>
  );
};

export default FooterIconsContainer;
