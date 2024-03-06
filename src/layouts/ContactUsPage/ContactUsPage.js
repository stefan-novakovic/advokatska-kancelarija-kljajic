import { StyledContactUsPage } from "./ContactUsPage.styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";

const ContactUsPage = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Ovo polje je obavezno")
      .min(2, "Minimalna dužina je 2 karaktera"),
    lastName: yup
      .string()
      .required("Ovo polje je obavezno")
      .min(2, "Minimalna dužina je 2 karaktera"),
    email: yup
      .string()
      .required("Ovo polje je obavezno")
      .email("Neispravan email format")
      .matches(/^\w+([-+.']*\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/, {
        message: "Neispravan email format",
      }),
    message: yup
      .string()
      .required("Ovo polje je obavezno")
      .min(2, "Minimalna dužina je 2 karaktera")
      .max(400, "Maksimalna dužina je 400 karaktera"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
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
  return (
    <StyledContactUsPage>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <TextField
              label="Ime"
              id="firstName"
              defaultValue=""
              variant="outlined"
              autoComplete="off"
              {...register("firstName")}
            />
            <p>{errors.firstName?.message}</p>
          </div>
          <div>
            <TextField
              label="Prezime"
              id="lastName"
              defaultValue=""
              variant="outlined"
              autoComplete="off"
              {...register("lastName")}
            />

            <p>{errors.lastName?.message}</p>
          </div>
        </div>

        <TextField
          label="Email"
          id="email"
          defaultValue=""
          variant="outlined"
          autoComplete="off"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <TextareaAutosize
          style={{ resize: "none" }}
          aria-label="Unesite tekst poruke"
          minRows={10}
          maxRows={40}
          placeholder="Unesite tekst poruke ovde..."
          id="message"
          {...register("message")}
        />
        <p>{errors.message?.message}</p>
        <button type="submit">Pošalji</button>
      </form>
    </StyledContactUsPage>
  );
};

export default ContactUsPage;
