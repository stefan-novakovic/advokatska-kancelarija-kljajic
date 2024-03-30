import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";

const NavAboutUsListItem = ({
  itemName,
  itemClassName,
  link,
  language,
  selectedItemName,
}) => {
  return (
    <li>
      <Link
        to={link}
        className={
          selectedItemName === itemClassName ? "selected" : "not-selected"
        }
      >
        {HeaderAndFooterData[`${language}`].navMenuObj[`${itemName}`]}
      </Link>
    </li>
  );
};

export default NavAboutUsListItem;
