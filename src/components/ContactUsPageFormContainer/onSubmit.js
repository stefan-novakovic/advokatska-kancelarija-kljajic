import axios from "../../api/axios";
import getDate from "./getDate";

export const onSubmit = async (data, setResponseErr) => {
  try {
    const subject = "Informacije i pitanja | Advokatska Kancelarija Kljajić";
    const currentDate = getDate();
    const firstName =
      data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
    const lastName =
      data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
    const email = data.email.toLowerCase();
    const message =
      data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

    await axios.post(
      "/api/email/contact-us1",
      JSON.stringify({
        firstName,
        lastName,
        email,
        currentDate,
        subject,
        message,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    setResponseErr(true);
  }
};
