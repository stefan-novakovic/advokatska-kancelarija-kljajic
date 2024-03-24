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
      <Item
        itemKey={"pocetna"}
        text={
          <Link
            to="/"
            className={selectedItem === "pocetna" ? "selected" : "not-selected"}
            onClick={handleItemClick}
          >
            POČETNA
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
            O NAMA
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
            OBLASTI RADA
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
            KLIJENTI
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
            KORISNI LINKOVI
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
            KONTAKT
          </Link>
        }
      />
    </Menu>
  );
};

export default PhoneSidebarMenu;
