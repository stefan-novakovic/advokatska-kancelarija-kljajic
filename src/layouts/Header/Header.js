import React from "react";
import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/gk-logo.png";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Menu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <StyledHeader>
      <HashLink smooth to="/#">
        <img src={logo} alt="" />
      </HashLink>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={false} distance="sm" color="#F2F6F9" />
      </div>
      <Nav />
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} width={285}>
        <Link
          to="/"
          className={selectedItem === "pocetna" ? "selected" : "not-selected"}
        >
          <Item
            itemKey={"pocetna"}
            text={"POČETNA"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <Link
          to="/o-nama"
          className={selectedItem === "o-nama" ? "selected" : "not-selected"}
        >
          <Item
            itemKey={"o-nama"}
            text={"O NAMA"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <Link
          to="/oblasti-rada"
          className={
            selectedItem === "oblasti-rada" ? "selected" : "not-selected"
          }
        >
          <Item
            itemKey={"oblasti-rada"}
            text={"OBLASTI RADA"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <Link
          to="/klijenti"
          className={selectedItem === "klijenti" ? "selected" : "not-selected"}
        >
          <Item
            itemKey={"klijenti"}
            text={"KLIJENTI"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <Link
          to="/korisni-linkovi"
          className={
            selectedItem === "korisni-linkovi" ? "selected" : "not-selected"
          }
        >
          <Item
            itemKey={"korisni-linkovi"}
            text={"KORISNI LINKOVI"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <Link
          to="/kontakt"
          className={selectedItem === "kontakt" ? "selected" : "not-selected"}
        >
          <Item
            itemKey={"kontakt"}
            text={"KONTAKT"}
            onClick={() => setIsOpen(false)}
          />
        </Link>
      </Menu>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
