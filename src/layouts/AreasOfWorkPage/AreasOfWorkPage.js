import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { AreasOfWorkPageData } from "../../data/dataAreasOfWorkPage";
import useDataContext from "../../hooks/useDataContext";

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
                <LazyLoadImage
                  src={law.img}
                  alt=""
                  effect="opacity"
                  threshold={300}
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
