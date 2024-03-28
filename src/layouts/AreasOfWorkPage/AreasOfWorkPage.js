import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer.styled";
import { AreasOfWorkPageData } from "../../data/dataAreasOfWorkPage";
import useDataContext from "../../hooks/useDataContext";
import AreasOfWorkPageImageContainer from "../../components/AreasOfWorkPageImageContainer/AreasOfWorkPageImageContainer";

const AreasOfWorkPage = () => {
  const { language } = useDataContext();
  return (
    <StyledAreasOfWorkPage>
      <h2>{AreasOfWorkPageData[`${language}`].pageTitle}</h2>
      <AreasOfWorkPageListContainer>
        {AreasOfWorkPageData[`${language}`].aopArray.map((law) => {
          return (
            <li key={law.id} id={law.id}>
              <div>
                <AreasOfWorkPageImageContainer
                  img={law.img}
                  placeholderImg={law.placeholderImg}
                />
                <h3>{law.title}</h3>
              </div>
              <p>{law.desc}</p>
            </li>
          );
        })}
      </AreasOfWorkPageListContainer>
    </StyledAreasOfWorkPage>
  );
};

export default AreasOfWorkPage;
