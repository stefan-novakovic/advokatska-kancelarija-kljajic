import { StyledLastNameTextFieldWrapper } from "./LastNameTextFieldWrapper.styled";
import {
  LastNameTextField,
  LastNameTextFieldErrors,
} from "./LastNameTextField";

const LastNameTextFieldWrapper = ({ register, errors, language }) => {
  return (
    <StyledLastNameTextFieldWrapper>
      <LastNameTextField
        register={register}
        errors={errors}
        language={language}
      />
      <LastNameTextFieldErrors errors={errors} />
    </StyledLastNameTextFieldWrapper>
  );
};

export default LastNameTextFieldWrapper;
