import { StyledAboutUsStaffDetailsPage } from "./AboutUsStaffDetailsPage.styled";
import AboutUsStaffDetailsPageMainInfoContainer from "../../components/AboutUsStaffDetailsPageMainInfoContainer/AboutUsStaffDetailsPageMainInfoContainer";
import AboutUsStaffDetailsPageBioContainer from "../../components/AboutUsStaffDetailsPageBioContainer/AboutUsStaffDetailsPageBioContainer";
import { useParams } from "react-router-dom";
import { AboutUsPageData } from "../../data/dataAboutUsPage";
import useDataContext from "../../hooks/useDataContext";

const AboutUsStaffDetailsPage = () => {
  const { id } = useParams();
  const { language } = useDataContext();
  const staffMember = AboutUsPageData[`${language}`].staffArray.find(
    (memberObj) => id === memberObj.id
  );

  return (
    <StyledAboutUsStaffDetailsPage>
      <h2>{AboutUsPageData[`${language}`].staffDetailsPageTitle}</h2>
      <AboutUsStaffDetailsPageMainInfoContainer staffMember={staffMember} />
      <AboutUsStaffDetailsPageBioContainer
        staffMemberBio={staffMember.bio}
        language={language}
      />
    </StyledAboutUsStaffDetailsPage>
  );
};

export default AboutUsStaffDetailsPage;
