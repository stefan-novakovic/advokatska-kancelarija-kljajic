import { Link } from "react-router-dom";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";
import { useParams } from "react-router-dom";

const NavAboutUsListItem = ({
  itemName,
  itemClassName,
  link,
  language,
  selectedItemName,
}) => {
  const { id } = useParams();

  return (
    <li>
      <Link
        to={link}
        className={
          id == null && selectedItemName === itemClassName
            ? "selected"
            : id !== null && selectedItemName === itemClassName
            ? "selected_ausdp"
            : "not-selected"
        }
      >
        {HeaderAndFooterData[`${language}`].navMenuObj[`${itemName}`]}
      </Link>
    </li>
  );
};

export default NavAboutUsListItem;
