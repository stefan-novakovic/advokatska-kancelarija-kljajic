import { Item } from "burger-menu";
import { PhoneSidebarMenuData } from "../../data/dataPhoneSidebarMenu";

const LanguageListItem = ({ language, setLanguage }) => {
  return (
    <Item
      itemKey={"jezik"}
      text={
        <button
          type="button"
          onClick={() => {
            setLanguage(language === "SRB" ? "ENG" : "SRB");
            localStorage.setItem("lang", JSON.stringify(language));
          }}
        >
          {PhoneSidebarMenuData[`${language}`].navMenuObj.language}: {language}
        </button>
      }
    />
  );
};

export default LanguageListItem;
