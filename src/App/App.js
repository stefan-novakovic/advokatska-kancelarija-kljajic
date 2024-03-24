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
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <StyledApp>
      <DataProvider>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
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
      </DataProvider>
    </StyledApp>
  );
}

export default App;
