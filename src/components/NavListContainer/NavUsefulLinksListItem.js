import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavUsefulLinksListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/korisni-linkovi"
        className={
          selectedItem === "korisni-linkovi" ? "selected" : "not-selected"
        }
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.usefulLinks}
      </Link>
    </li>
  );
};

export default NavUsefulLinksListItem;
