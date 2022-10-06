import { Route, Routes } from "react-router-dom";
import { Home } from "../HomeComponent/HomeComponent";
import { Catalog } from "../Catalog/CatalogComponent";
import IndividualPage from "../Individual/Individual";
import { About } from "../About/AboutComponent";
import { Contacts } from "../Contacts/ContactsComponent";
import { Portfolio } from "../Portfolio/PortfolioComponent";
import {Header} from "../HeaderComponent/HeaderComponet";
import {Footer} from "../FooterComponents/Footer";
import {Privacy} from "../Pivacy/Privacy";
import {Categories} from "../Catalog/Catalog_Categories/Categories";
import {NoPage} from "../NoPage";
import {Basket} from "../BasketComponents/Basket";
import {Planting} from "../Planting/Planting";


export const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/individual" element={<IndividualPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="*" element={<NoPage/>}/>
        <Route path="/Basket" element={<Basket/>}/>
        <Route path="/Ozelenenie" element={<Planting/>}/>
      </Routes>
      <Footer />

    </div>
  );
};
