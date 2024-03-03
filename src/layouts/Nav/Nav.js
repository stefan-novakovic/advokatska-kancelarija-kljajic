import { StyledNav } from "./Nav.styled";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">POČETNA</Link>
        </li>
        <li>
          <Link to="/o-nama">O NAMA</Link>
        </li>
        <li>
          <Link to="/oblasti-rada">OBLASTI RADA</Link>
        </li>
        <li>
          <Link to="/klijenti">KLIJENTI</Link>
        </li>
        <li>
          <Link to="/korisni-linkovi">KORISNI LINKOVI</Link>
        </li>
        <li>
          <Link to="/kontakt">KONTAKT</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
