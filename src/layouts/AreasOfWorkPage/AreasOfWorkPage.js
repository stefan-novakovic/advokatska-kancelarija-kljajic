import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer.styled";
import { lawsDataArray } from "../../data/data";

const AreasOfWorkPage = () => {
  return (
    <StyledAreasOfWorkPage>
      <h2>Oblasti rada</h2>
      <AreasOfWorkPageListContainer>
        {lawsDataArray.map((law) => {
          return (
            <li key={law.id} id={law.id}>
              <h3>{law.title}</h3>
              <p>{law.body}</p>
            </li>
          );
        })}
      </AreasOfWorkPageListContainer>
    </StyledAreasOfWorkPage>
  );
};

export default AreasOfWorkPage;
