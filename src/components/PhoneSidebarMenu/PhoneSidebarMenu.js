import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";
import useDataContext from "../../hooks/useDataContext";
import srbIcon from "../../assets/images/sr.png";
import enIcon from "../../assets/images/en.png";

const PhoneSidebarMenu = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");
  const { language, setLanguage } = useDataContext();

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

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      key="sidebar-menu"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      width={300}
    >
      <Item
        itemKey={"pocetna"}
        text={
          <Link
            to="/"
            className={selectedItem === "pocetna" ? "selected" : "not-selected"}
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.home}
          </Link>
        }
      />

      <Item
        itemKey={"o-nama"}
        text={
          <Link
            to="/o-nama"
            className={selectedItem === "o-nama" ? "selected" : "not-selected"}
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.aboutUs}
          </Link>
        }
      />

      <Item
        itemKey={"oblasti-rada"}
        text={
          <Link
            to="/oblasti-rada"
            className={
              selectedItem === "oblasti-rada" ? "selected" : "not-selected"
            }
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.areasOfWork}
          </Link>
        }
      />

      <Item
        itemKey={"klijenti"}
        text={
          <Link
            to="/klijenti"
            className={
              selectedItem === "klijenti" ? "selected" : "not-selected"
            }
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.clients}
          </Link>
        }
      />

      <Item
        itemKey={"korisni-linkovi"}
        text={
          <Link
            to="/korisni-linkovi"
            className={
              selectedItem === "korisni-linkovi" ? "selected" : "not-selected"
            }
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.usefulLinks}
          </Link>
        }
      />

      <Item
        itemKey={"kontakt"}
        text={
          <Link
            to="/kontakt"
            className={selectedItem === "kontakt" ? "selected" : "not-selected"}
            onClick={handleItemClick}
          >
            {PhoneSidebarMenuData[`${language}`].navMenuObj.contact}
          </Link>
        }
      />

      <Item
        itemKey={"jezik"}
        text={
          <button
            type="button"
            onClick={() => {
              setLanguage(language === "SRB" ? "ENG" : "SRB");
              localStorage.setItem("lang", JSON.stringify(language));
            }}
          >
            <p>{PhoneSidebarMenuData[`${language}`].navMenuObj.language}</p>
            <img src={language === "SRB" ? srbIcon : enIcon} alt="" />
          </button>
        }
      />
    </Menu>
  );
};

export default PhoneSidebarMenu;
