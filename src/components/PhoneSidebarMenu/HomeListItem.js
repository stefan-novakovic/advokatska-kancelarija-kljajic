import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const HomeListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
    <Item
      itemKey={"pocetna"}
      text={
        <Link
          to="/"
          className={selectedItem === "pocetna" ? "selected" : "not-selected"}
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.home}
        </Link>
      }
    />
  );
};

export default HomeListItem;
