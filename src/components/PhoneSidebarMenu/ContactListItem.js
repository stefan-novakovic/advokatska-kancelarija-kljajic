import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const ContactListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
    <Item
      itemKey={"kontakt"}
      text={
        <Link
          to="/kontakt"
          className={selectedItem === "kontakt" ? "selected" : "not-selected"}
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.contact}
        </Link>
      }
    />
  );
};

export default ContactListItem;
