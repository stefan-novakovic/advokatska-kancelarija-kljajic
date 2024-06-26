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
import useDataContext from "../../hooks/useDataContext";

const ContactUsPageFormContainer = ({
  setSendMessageOpen,
  setErrorMessageOpen,
  language,
}) => {
  const { responseErr, setResponseErr } = useDataContext();
  const schema = yupValidationSchema(language);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitSuccessful, touchedFields, dirtyFields },
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
    if (isSubmitSuccessful && !responseErr) {
      reset();
      setSendMessageOpen(true);
    } else if (isSubmitSuccessful && responseErr) {
      setResponseErr(false);
      reset(undefined, { keepDirtyValues: true });
      setErrorMessageOpen(true);
    }
  }, [
    isSubmitSuccessful,
    responseErr,
    reset,
    setSendMessageOpen,
    setResponseErr,
    setErrorMessageOpen,
  ]);

  return (
    <StyledContactUsPageFormContainer
      onSubmit={handleSubmit((data) => onSubmit(data, setResponseErr))}
      data-aos="fade-left"
    >
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

      <SubmitButtonWrapper language={language} dirtyFields={dirtyFields} />
    </StyledContactUsPageFormContainer>
  );
};

export default ContactUsPageFormContainer;
