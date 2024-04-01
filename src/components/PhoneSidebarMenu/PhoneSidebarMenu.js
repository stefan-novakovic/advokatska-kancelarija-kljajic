import { Menu } from "burger-menu";
import "burger-menu/lib/index.css";
import GenericListItem from "./GenericListItem";
import LanguageListItem from "./LanguageListItem";
import { NavListItemArray } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const PhoneSidebarMenu = ({ openSidebar, setOpenSidebar }) => {
  const { language, setLanguage, selectedItemName } = useDataContext();

  const handleItemClick = () => {
    setOpenSidebar(false);
  };

  return (
    <Menu
      key="sidebar-menu"
      isOpen={openSidebar}
      onClose={() => setOpenSidebar(false)}
      width={300}
    >
      {NavListItemArray.map((item) => {
        return (
          <GenericListItem
            key={item.itemClassName}
            itemName={item.name}
            itemClassName={item.itemClassName}
            link={item.link}
            language={language}
            selectedItemName={selectedItemName}
            handleItemClick={handleItemClick}
          />
        );
      })}
      <LanguageListItem language={language} setLanguage={setLanguage} />
    </Menu>
  );
};

export default PhoneSidebarMenu;
