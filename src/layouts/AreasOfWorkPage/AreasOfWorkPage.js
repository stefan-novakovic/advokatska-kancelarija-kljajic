import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer.styled";
import { lawsDataArray } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AreasOfWorkPage = () => {
  return (
    <StyledAreasOfWorkPage>
      <h2>Oblasti rada</h2>
      <AreasOfWorkPageListContainer>
        {lawsDataArray.map((law) => {
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
              <p>{law.body}</p>
            </li>
          );
        })}
      </AreasOfWorkPageListContainer>
    </StyledAreasOfWorkPage>
  );
};

export default AreasOfWorkPage;
