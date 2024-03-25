import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("lang")) || "SRB"
  );

  localStorage.setItem("lang", JSON.stringify(language));

  return (
    <DataContext.Provider value={{ language, setLanguage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
