import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const AboutUsListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
    <Item
      itemKey={"o-nama"}
      text={
        <Link
          to="/o-nama"
          className={selectedItem === "o-nama" ? "selected" : "not-selected"}
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.aboutUs}
        </Link>
      }
    />
  );
};

export default AboutUsListItem;
