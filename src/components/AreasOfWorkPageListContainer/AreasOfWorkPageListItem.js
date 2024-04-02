import { StyledAreasOfWorkPageListItem } from "./AreasOfWorkPageListItem.styled";
import AreasOfWorkPageImageWrapper from "./AreasOfWorkPageImageWrapper";

const AreasOfWorkPageListItem = ({ lawObj }) => {
  return (
    <StyledAreasOfWorkPageListItem data-aos="fade-left" id={lawObj.id}>
      <div>
        <AreasOfWorkPageImageWrapper
          img={lawObj.img}
          placeholderImg={lawObj.placeholderImg}
        />
        <h3>{lawObj.title}</h3>
      </div>

      <p>{lawObj.desc}</p>
    </StyledAreasOfWorkPageListItem>
  );
};

export default AreasOfWorkPageListItem;
