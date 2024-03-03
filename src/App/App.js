import { StyledApp } from "./App.styled";
import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../layouts/Layout/Layout";
import HomePage from "../layouts/HomePage/HomePage";
import AboutUsPage from "../layouts/AboutUsPage/AboutUsPage";
import AreasOfWorkPage from "../layouts/AreasOfWorkPage/AreasOfWorkPage";
import ClientsPage from "../layouts/ClientsPage/ClientsPage";
import UsefulLinksPage from "../layouts/UsefulLinksPage/UsefulLinksPage";
import ContactUsPage from "../layouts/ContactUsPage/ContactUsPage";
import MissingPage from "../layouts/MissingPage/MissingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="o-nama" element={<AboutUsPage />} />
          <Route path="oblasti-rada" element={<AreasOfWorkPage />} />
          <Route path="klijenti" element={<ClientsPage />} />
          <Route path="korisni-linkovi" element={<UsefulLinksPage />} />
          <Route path="kontakt" element={<ContactUsPage />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
