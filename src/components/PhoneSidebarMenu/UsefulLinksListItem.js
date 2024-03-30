import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const UsefulLinksListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
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
          {PhoneSidebarMenuData[`${language}`].navMenuObj.usefulLinks}
        </Link>
      }
    />
  );
};

export default UsefulLinksListItem;
