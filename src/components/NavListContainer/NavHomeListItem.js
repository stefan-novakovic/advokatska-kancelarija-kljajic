import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavHomeListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/"
        className={selectedItem === "pocetna" ? "selected" : "not-selected"}
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.home}
      </Link>
    </li>
  );
};

export default NavHomeListItem;
