import { StyledNav } from "./Nav.styled";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <HashLink to="/#">POČETNA</HashLink>
        </li>
        <li>
          <HashLink to="/o-nama/#">O NAMA</HashLink>
        </li>
        <li>
          <HashLink to="/oblasti-rada/#">OBLASTI RADA</HashLink>
        </li>
        <li>
          <HashLink to="/klijenti/#">KLIJENTI</HashLink>
        </li>
        <li>
          <HashLink to="/korisni-linkovi/#">KORISNI LINKOVI</HashLink>
        </li>
        <li>
          <HashLink to="/kontakt/#">KONTAKT</HashLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
