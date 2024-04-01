import { StyledFirstNameTextFieldWrapper } from "./FirstNameTextFieldWrapper.styled";
import {
  FirstNameTextField,
  FirstNameTextFieldErrors,
} from "./FirstNameTextField";

const FirstNameTextFieldWrapper = ({ register, errors, language }) => {
  return (
    <StyledFirstNameTextFieldWrapper>
      <FirstNameTextField
        register={register}
        errors={errors}
        language={language}
      />
      <FirstNameTextFieldErrors errors={errors} />
    </StyledFirstNameTextFieldWrapper>
  );
};

export default FirstNameTextFieldWrapper;
