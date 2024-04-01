import { Item } from "burger-menu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const GenericListItem = ({
  itemName,
  itemClassName,
  link,
  language,
  selectedItemName,
  handleItemClick,
}) => {
  const { id } = useParams();

  return (
    <Item
      itemKey={itemClassName}
      text={
        <Link
          to={link}
          className={
            id == null && selectedItemName === itemClassName
              ? "selected"
              : id !== null && selectedItemName === itemClassName
              ? "selected_ausdp"
              : "not-selected"
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
