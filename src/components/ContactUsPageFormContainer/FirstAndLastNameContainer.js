import { StyledFirstAndLastNameContainer } from "./FirstAndLastNameContainer.styled";
import FirstNameTextFieldWrapper from "./FirstNameTextFieldWrapper";
import LastNameTextFieldWrapper from "./LastNameTextFieldWrapper";

const FirstAndLastNameContainer = ({ register, errors, language }) => {
  return (
    <StyledFirstAndLastNameContainer>
      <FirstNameTextFieldWrapper
        register={register}
        errors={errors}
        language={language}
      />

      <LastNameTextFieldWrapper
        register={register}
        errors={errors}
        language={language}
      />
    </StyledFirstAndLastNameContainer>
  );
};

export default FirstAndLastNameContainer;
