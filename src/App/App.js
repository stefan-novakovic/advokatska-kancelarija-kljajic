import { StyledApp } from "./App.styled";
import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../layouts/Layout/Layout";
import HomePage from "../layouts/HomePage/HomePage";
import AboutUsPage from "../layouts/AboutUsPage/AboutUsPage";
import AboutUsStaffDetailsPage from "../layouts/AboutUsStaffDetailsPage/AboutUsStaffDetailsPage";
import AreasOfWorkPage from "../layouts/AreasOfWorkPage/AreasOfWorkPage";
import ClientsPage from "../layouts/ClientsPage/ClientsPage";
import UsefulLinksPage from "../layouts/UsefulLinksPage/UsefulLinksPage";
import ContactUsPage from "../layouts/ContactUsPage/ContactUsPage";
import MissingPage from "../layouts/MissingPage/MissingPage";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <StyledApp>
      <GlobalStyles />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="o-nama">
            <Route index element={<AboutUsPage />} />
            <Route path=":id" element={<AboutUsStaffDetailsPage />} />
          </Route>
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
