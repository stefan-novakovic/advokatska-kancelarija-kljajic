import { StyledAreasOfWorkPage } from "./AreasOfWorkPage.styled";
import AreasOfWorkPageListContainer from "../../components/AreasOfWorkPageListContainer/AreasOfWorkPageListContainer.styled";
import { lawsDataArray } from "../../data/lawsDataArray";

const AreasOfWorkPage = () => {
  return (
    <StyledAreasOfWorkPage>
      <h2>Oblasti rada</h2>
      <AreasOfWorkPageListContainer>
        {lawsDataArray.map((law) => {
          return (
            <li key={law.id}>
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
