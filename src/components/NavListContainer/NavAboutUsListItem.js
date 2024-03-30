import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavAboutUsListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/o-nama"
        className={selectedItem === "o-nama" ? "selected" : "not-selected"}
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.aboutUs}
      </Link>
    </li>
  );
};

export default NavAboutUsListItem;
