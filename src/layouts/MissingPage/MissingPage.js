import { StyledMissingPage } from "./MissingPage.styled";
import { Link } from "react-router-dom";
import { MissingPageData } from "../../data/dataMissingPage";
import useDataContext from "../../hooks/useDataContext";

const MissingPage = () => {
  const { language } = useDataContext();
  return (
    <StyledMissingPage>
      <h2>{MissingPageData[`${language}`].pageTitle}</h2>
      <div>
        <Link to="/">{MissingPageData[`${language}`].goBackLinkText}</Link>
      </div>
    </StyledMissingPage>
  );
};

export default MissingPage;
