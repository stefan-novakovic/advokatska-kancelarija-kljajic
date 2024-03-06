import { StyledNav } from "./Nav.styled";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <HashLink smooth to="/#">
            POČETNA
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/o-nama/#">
            O NAMA
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/oblasti-rada/#">
            OBLASTI RADA
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/klijenti/#">
            KLIJENTI
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/korisni-linkovi/#">
            KORISNI LINKOVI
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/kontakt/#">
            KONTAKT
          </HashLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
