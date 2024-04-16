// import axios from "../../api/axios";

export const onSubmit = async (data) => {
  try {
    const firstName =
      data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
    const lastName =
      data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
    const message =
      data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

    console.log(JSON.stringify({ firstName, lastName, message }));

    // const response = await axios.post(
    //   "",
    //   JSON.stringify({ firstName, lastName, message })
    // );
  } catch (err) {
    // if (err.response) {
    //   console.log(`Error ${err.response.status}: ${err.response.data}`);
    // } else {
    //   console.log(`Error: ${err.message}`);
    // }
  }
};
