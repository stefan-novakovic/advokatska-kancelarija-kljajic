import axios from "../../api/axios";

export const onSubmit = async (data) => {
  try {
    const firstName =
      data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
    const lastName =
      data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
    const email = data.email.toLowerCase();
    const message =
      data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

    const response = await axios.post(
      "/api/email/contact-us",
      JSON.stringify({ firstName, lastName, email, message }),
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.log(`Error ${err.response.status}: ${err.response.data}`);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};
