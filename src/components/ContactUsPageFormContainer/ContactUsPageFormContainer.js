import { StyledContactUsPageFormContainer } from "./ContactUsPageFormContainer.styled";
import FirstAndLastNameContainer from "./FirstAndLastNameContainer";
import { EmailTextField, EmailTextFieldErrors } from "./EmailTextField";
import { MessageTextField, MessageTextFieldErrors } from "./MessageTextField";
import SubmitButtonWrapper from "./SubmitButtonWrapper";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupValidationSchema } from "../ContactUsPageFormContainer/yupValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDefaultValues } from "./formDefaultValues";
import { onSubmit } from "./onSubmit";

const ContactUsPageFormContainer = ({ language, setSendMessageOpen }) => {
  const schema = yupValidationSchema(language);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitSuccessful, touchedFields },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues,
  });

  useEffect(() => {
    if (touchedFields.firstName) {
      trigger("firstName");
    }
    if (touchedFields.lastName) {
      trigger("lastName");
    }
    if (touchedFields.email) {
      trigger("email");
    }
    if (touchedFields.message) {
      trigger("message");
    }
  }, [language, touchedFields, trigger]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setSendMessageOpen(true);
    }
  }, [isSubmitSuccessful, reset, setSendMessageOpen]);

  return (
    <StyledContactUsPageFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FirstAndLastNameContainer
        register={register}
        errors={errors}
        language={language}
      />
      <EmailTextField register={register} errors={errors} />
      <EmailTextFieldErrors errors={errors} />

      <MessageTextField
        register={register}
        errors={errors}
        language={language}
      />
      <MessageTextFieldErrors errors={errors} />

      <SubmitButtonWrapper language={language} touchedFields={touchedFields} />
    </StyledContactUsPageFormContainer>
  );
};

export default ContactUsPageFormContainer;
