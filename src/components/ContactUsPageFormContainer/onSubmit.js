export const onSubmit = (data) => {
  data.firstName =
    data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
  data.lastName =
    data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
  data.message = data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

  console.log(data);
};
