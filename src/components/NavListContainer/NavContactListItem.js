import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavContactListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/kontakt"
        className={selectedItem === "kontakt" ? "selected" : "not-selected"}
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.contact}
      </Link>
    </li>
  );
};

export default NavContactListItem;
