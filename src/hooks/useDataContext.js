import { useContext } from "react";
import DataContext from "../context/DataContext";

const useDataContext = () => {
  return useContext(DataContext);
};

export default useDataContext;
