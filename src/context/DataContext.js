import { createContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("lang")) || "SRB"
  );
  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");
  const location = useLocation();

  localStorage.setItem("lang", JSON.stringify(language));

  useEffect(() => {
    const currentPath = location.pathname;
    const pageSelection =
      currentPath === "/"
        ? "pocetna"
        : currentPath.includes("/o-nama")
        ? "o-nama"
        : currentPath === "/oblasti-rada"
        ? "oblasti-rada"
        : currentPath === "/klijenti"
        ? "klijenti"
        : currentPath === "/korisni-linkovi"
        ? "korisni-linkovi"
        : currentPath === "/kontakt"
        ? "kontakt"
        : "";
    setSelectedItemName(pageSelection);
  }, [location]);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 50, once: true });
  }, []);

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        openSidebar,
        setOpenSidebar,
        selectedItemName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
