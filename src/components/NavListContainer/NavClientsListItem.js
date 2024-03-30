import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavClientsListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/klijenti"
        className={selectedItem === "klijenti" ? "selected" : "not-selected"}
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.clients}
      </Link>
    </li>
  );
};

export default NavClientsListItem;
