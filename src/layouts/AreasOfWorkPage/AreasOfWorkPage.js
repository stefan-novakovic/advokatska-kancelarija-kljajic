import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer";
import { AreasOfWorkPageData } from "../../data/dataAreasOfWorkPage";
import useDataContext from "../../hooks/useDataContext";

const AreasOfWorkPage = () => {
  const { language } = useDataContext();
  return (
    <StyledAreasOfWorkPage>
      <h2 data-aos="fade-left">
        {AreasOfWorkPageData[`${language}`].pageTitle}
      </h2>
      <AreasOfWorkPageListContainer language={language} />
    </StyledAreasOfWorkPage>
  );
};

export default AreasOfWorkPage;
