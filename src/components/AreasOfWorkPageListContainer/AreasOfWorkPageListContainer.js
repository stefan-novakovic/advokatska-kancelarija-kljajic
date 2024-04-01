import { StyledAreasOfWorkPageListContainer } from "./AreasOfWorkPageListContainer.styled";
import { AreasOfWorkPageData } from "../../data/dataAreasOfWorkPage";
import AreasOfWorkPageListItem from "./AreasOfWorkPageListItem";

const AreasOfWorkPageListContainer = ({ language }) => {
  return (
    <StyledAreasOfWorkPageListContainer>
      {AreasOfWorkPageData[`${language}`].aopArray.map((lawObj) => {
        return <AreasOfWorkPageListItem key={lawObj.id} lawObj={lawObj} />;
      })}
    </StyledAreasOfWorkPageListContainer>
  );
};

export default AreasOfWorkPageListContainer;
