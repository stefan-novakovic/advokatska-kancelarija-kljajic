import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const AreasOfWorkListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
    <Item
      itemKey={"oblasti-rada"}
      text={
        <Link
          to="/oblasti-rada"
          className={
            selectedItem === "oblasti-rada" ? "selected" : "not-selected"
          }
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.areasOfWork}
        </Link>
      }
    />
  );
};

export default AreasOfWorkListItem;
