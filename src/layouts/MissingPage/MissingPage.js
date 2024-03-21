import { StyledMissingPage } from "./MissingPage.styled";
import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <StyledMissingPage>
      <h2>Stranica nije pronađena</h2>
      <div>
        <Link to="/">Vratite se na početnu stranicu</Link>
      </div>
    </StyledMissingPage>
  );
};

export default MissingPage;
