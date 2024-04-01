import { StyledNavListContainer } from "./NavListContainer.styled";
import NavListItem from "./NavListItem";
import { NavListItemArray } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const NavListContainer = () => {
  const { language, selectedItemName } = useDataContext();

  return (
    <StyledNavListContainer>
      {NavListItemArray.map((item) => {
        return (
          <NavListItem
            key={item.name}
            itemName={item.name}
            itemClassName={item.itemClassName}
            link={item.link}
            language={language}
            selectedItemName={selectedItemName}
          />
        );
      })}
    </StyledNavListContainer>
  );
};

export default NavListContainer;
