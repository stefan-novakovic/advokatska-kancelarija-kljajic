import { StyledMissingPage } from "./MissingPage.styled";
import { HashLink } from "react-router-hash-link";

const MissingPage = () => {
  return (
    <StyledMissingPage>
      <h2>Stranica nije pronađena</h2>
      <div>
        <HashLink smooth to="/#">
          Vratite se na početnu stranicu
        </HashLink>
      </div>
    </StyledMissingPage>
  );
};

export default MissingPage;
