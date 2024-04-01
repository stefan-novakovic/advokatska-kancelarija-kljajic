import * as yup from "yup";
import { ContactUsPageData } from "../../data/dataContactUsPage";

export const yupValidationSchema = (language) => {
  return yup.object().shape({
    firstName: yup
      .string()
      .required(ContactUsPageData[`${language}`].yupRequired)
      .trim()
      .min(2, ContactUsPageData[`${language}`].yupMin),
    lastName: yup
      .string()
      .required(ContactUsPageData[`${language}`].yupRequired)
      .trim()
      .min(2, ContactUsPageData[`${language}`].yupMin),
    email: yup
      .string()
      .required(ContactUsPageData[`${language}`].yupRequired)
      .trim()
      .email(ContactUsPageData[`${language}`].yupEmail)
      .matches(/^\w+([-+.']*\w+)*@\w+([-.]\w{2,3}){1,3}$/, {
        message: ContactUsPageData[`${language}`].yupEmail,
      }),
    message: yup
      .string()
      .required(ContactUsPageData[`${language}`].yupRequired)
      .trim()
      .min(2, ContactUsPageData[`${language}`].yupMin)
      .max(400, ContactUsPageData[`${language}`].yupMax),
  });
};
