import { StyledContactUsPage } from "./ContactUsPage.styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import StyledContactUsContainer from "../../components/ContactUsPageInfoContainer/ContactUsPageInfoContainer.styled";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { LuClock8 } from "react-icons/lu";
import { useState, useEffect } from "react";
import { ContactUsPageData } from "../../data/dataContactUsPage";
import useDataContext from "../../hooks/useDataContext";

const ContactUsPage = () => {
  const { language } = useDataContext();
  const schema = yup.object().shape({
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    data.firstName =
      data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
    data.lastName =
      data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
    data.message =
      data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

    console.log(data);
  };

  const [sendMessageOpacity, setSendMessageOpacity] = useState(0);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setSendMessageOpacity(1);
      setTimeout(() => {
        setSendMessageOpacity(0);
      }, 3000);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledContactUsPage>
      <h2>{ContactUsPageData[`${language}`].pageTitle}</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <TextField
                error={errors.firstName ? true : false}
                label={ContactUsPageData[`${language}`].firstNameLabel}
                id="firstName"
                defaultValue=""
                variant="outlined"
                autoComplete="off"
                {...register("firstName")}
                InputProps={{
                  style: { color: "whitesmoke", fontSize: "1.2rem" },
                }}
                InputLabelProps={{
                  style: { fontSize: "1.2rem", color: "whitesmoke" },
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: errors.firstName ? "red" : "whitesmoke",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid whitesmoke",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "whitesmoke",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.firstName
                        ? "red"
                        : "rgba(245,245,245,0.6)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.firstName
                        ? "red"
                        : "rgba(245,245,245,0.45)",
                    },
                  },
                }}
              />
              <p>{errors.firstName?.message}</p>
            </div>

            <div>
              <TextField
                error={errors.lastName ? true : false}
                label={ContactUsPageData[`${language}`].lastNameLabel}
                id="lastName"
                defaultValue=""
                variant="outlined"
                autoComplete="off"
                {...register("lastName")}
                InputProps={{
                  style: { color: "whitesmoke", fontSize: "1.2rem" },
                }}
                InputLabelProps={{
                  style: { fontSize: "1.2rem", color: "whitesmoke" },
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: errors.lastName ? "red" : "whitesmoke",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid whitesmoke",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "whitesmoke",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.lastName
                        ? "red"
                        : "rgba(245,245,245,0.6)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.lastName
                        ? "red"
                        : "rgba(245,245,245,0.45)",
                    },
                  },
                }}
              />
              <p>{errors.lastName?.message}</p>
            </div>
          </div>

          <TextField
            error={errors.email ? true : false}
            label={ContactUsPageData.SRB.emailLabel}
            id="email"
            defaultValue=""
            variant="outlined"
            autoComplete="off"
            {...register("email")}
            InputProps={{
              style: { color: "whitesmoke", fontSize: "1.2rem" },
            }}
            InputLabelProps={{
              style: { fontSize: "1.2rem", color: "whitesmoke" },
            }}
            sx={{
              "& label.Mui-focused": {
                color: errors.email ? "red" : "whitesmoke",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid whitesmoke",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "whitesmoke",
                },
                "&:hover fieldset": {
                  borderColor: errors.email ? "red" : "rgba(245,245,245,0.6)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.email ? "red" : "rgba(245,245,245,0.45)",
                },
              },
            }}
          />

          <p>{errors.email?.message}</p>

          <TextField
            error={errors.message ? true : false}
            multiline
            inputProps={{ style: { color: "white" } }}
            label={ContactUsPageData[`${language}`].messageLabel}
            id="message"
            defaultValue=""
            variant="outlined"
            autoComplete="off"
            rows={8}
            InputProps={{
              style: { color: "whitesmoke", fontSize: "1.2rem" },
            }}
            InputLabelProps={{
              style: { fontSize: "1.2rem", color: "whitesmoke" },
            }}
            sx={{
              "& label.Mui-focused": {
                color: errors.message ? "red" : "whitesmoke",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid whitesmoke",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "whitesmoke",
                },
                "&:hover fieldset": {
                  borderColor: errors.message ? "red" : "rgba(245,245,245,0.6)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.message
                    ? "red"
                    : "rgba(245,245,245,0.45)",
                },
              },
            }}
            {...register("message")}
          />

          <p>{errors.message?.message}</p>
          <div>
            <button type="submit">
              {ContactUsPageData[`${language}`].sentButtonText}
            </button>
            <h3 style={{ opacity: sendMessageOpacity }}>
              {ContactUsPageData[`${language}`].sentMessageText}
            </h3>
          </div>
        </form>
        <StyledContactUsContainer>
          <a href="tel:+381691669892">
            <HiOutlinePhone />
            069/166-98-92
          </a>

          <a href="mailto:info@advokatkljajic.com">
            <GoMail />
            info@advokatkljajic.com
          </a>

          <a
            href="https://www.facebook.com/AdvokatskakancelarijaKljajic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
            <span>{ContactUsPageData[`${language}`].facebookLinkText}</span>
          </a>

          <a
            href="https://www.instagram.com/advokatkljajic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram />
            advokatkljajic
          </a>

          <a
            href="https://maps.app.goo.gl/mkZf7gm4s2ErVtjv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlLocationPin />
            <span>Šekspirova 11,</span>
            &nbsp;
            <span>Novi Sad</span>
          </a>
          <div>
            <LuClock8 />
            <span>{ContactUsPageData[`${language}`].workingHoursLabel}</span>
            &nbsp;
            <span>{ContactUsPageData.SRB.workingHoursTimeText}</span>
          </div>
        </StyledContactUsContainer>
      </div>
    </StyledContactUsPage>
  );
};

export default ContactUsPage;
