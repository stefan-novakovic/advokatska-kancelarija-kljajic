import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("lang")) || "SRB"
  );
  const [openSidebar, setOpenSidebar] = useState(false);

  localStorage.setItem("lang", JSON.stringify(language));

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
