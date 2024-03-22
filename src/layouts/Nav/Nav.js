import { StyledNav } from "./Nav.styled";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const cselectedItem =
      path === "/"
        ? "pocetna"
        : path.includes("/o-nama")
        ? "o-nama"
        : path === "/oblasti-rada"
        ? "oblasti-rada"
        : path === "/klijenti"
        ? "klijenti"
        : path === "/korisni-linkovi"
        ? "korisni-linkovi"
        : path === "/kontakt"
        ? "kontakt"
        : "";
    setSelectedItem(cselectedItem);
  }, [location]);

  return (
    <StyledNav>
      <ul>
        <li>
          <Link
            to="/"
            className={selectedItem === "pocetna" ? "selected" : "not-selected"}
          >
            POČETNA
          </Link>
        </li>
        <li>
          <Link
            to="/o-nama"
            className={selectedItem === "o-nama" ? "selected" : "not-selected"}
          >
            O NAMA
          </Link>
        </li>
        <li>
          <Link
            to="/oblasti-rada"
            className={
              selectedItem === "oblasti-rada" ? "selected" : "not-selected"
            }
          >
            OBLASTI RADA
          </Link>
        </li>
        <li>
          <Link
            to="/klijenti"
            className={
              selectedItem === "klijenti" ? "selected" : "not-selected"
            }
          >
            KLIJENTI
          </Link>
        </li>
        <li>
          <Link
            to="/korisni-linkovi"
            className={
              selectedItem === "korisni-linkovi" ? "selected" : "not-selected"
            }
          >
            KORISNI LINKOVI
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            className={selectedItem === "kontakt" ? "selected" : "not-selected"}
          >
            KONTAKT
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
