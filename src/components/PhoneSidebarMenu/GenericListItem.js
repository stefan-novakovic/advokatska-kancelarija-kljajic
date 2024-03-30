import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const GenericListItem = ({
  itemName,
  itemClassName,
  link,
  language,
  selectedItemName,
  handleItemClick,
}) => {
  return (
    <Item
      itemKey={"pocetna"}
      text={
        <Link
          to={link}
          className={
            selectedItemName === itemClassName ? "selected" : "not-selected"
          }
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj[`${itemName}`]}
        </Link>
      }
    />
  );
};

export default GenericListItem;
