const getDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return day + "." + month + "." + year + ".";
};

export default getDate;
