import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavAreasOfWorkListItem = ({ selectedItem, language }) => {
  return (
    <li>
      <Link
        to="/oblasti-rada"
        className={
          selectedItem === "oblasti-rada" ? "selected" : "not-selected"
        }
      >
        {HeaderAndFooterData[`${language}`].navMenuObj.areasOfWork}
      </Link>
    </li>
  );
};

export default NavAreasOfWorkListItem;
