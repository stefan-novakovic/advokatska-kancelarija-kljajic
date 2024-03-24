import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

const PhoneSidebarMenu = ({ isOpen, setIsOpen }) => {
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
      <Link
        to="/"
        className={selectedItem === "pocetna" ? "selected" : "not-selected"}
      >
        <Item itemKey={"pocetna"} text={"POČETNA"} onClick={handleItemClick} />
      </Link>
      <Link
        to="/o-nama"
        className={selectedItem === "o-nama" ? "selected" : "not-selected"}
      >
        <Item itemKey={"o-nama"} text={"O NAMA"} onClick={handleItemClick} />
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
          onClick={handleItemClick}
        />
      </Link>
      <Link
        to="/klijenti"
        className={selectedItem === "klijenti" ? "selected" : "not-selected"}
      >
        <Item
          itemKey={"klijenti"}
          text={"KLIJENTI"}
          onClick={handleItemClick}
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
          onClick={handleItemClick}
        />
      </Link>
      <Link
        to="/kontakt"
        className={selectedItem === "kontakt" ? "selected" : "not-selected"}
      >
        <Item itemKey={"kontakt"} text={"KONTAKT"} onClick={handleItemClick} />
      </Link>
    </Menu>
  );
};

export default PhoneSidebarMenu;
