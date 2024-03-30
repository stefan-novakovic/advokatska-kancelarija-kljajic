import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const ClientsListItem = ({ selectedItem, language, handleItemClick }) => {
  return (
    <Item
      itemKey={"klijenti"}
      text={
        <Link
          to="/klijenti"
          className={selectedItem === "klijenti" ? "selected" : "not-selected"}
          onClick={handleItemClick}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.clients}
        </Link>
      }
    />
  );
};

export default ClientsListItem;
