import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Sign up";
import Home from "./Pages/Home";
import Errorpage from "./Pages/Error";
import Verification from "./Pages/Verification";
import Touch from "./Pages/Contact";
import Blog from "./Pages/News-Blog";
import Career from "./Pages/Career";
import About from "./Pages/About";
import Companyoverviewpage from "./Pages/About/Component/overviewIndex";
import Executivespage from "./Pages/About/Component/executivesIndex";
import Choosepage from "./Pages/About/Component/chooseIndex";
import RequestPlace from "./Pages/OpenRequest";
import MarketPlace from "./Pages/OpenMarket";
import ChemicalPage from "./Pages/OpenMarket/Agro-Chem";
import EquipmentsPage from "./Pages/OpenMarket/Agro-Equipment";
import AnimalsPage from "./Pages/OpenMarket/AnimalMarket";
import FeedPage from "./Pages/OpenMarket/FeedsMarket";
import FertilizerPage from "./Pages/OpenMarket/FertilizerMarket";
import FishingPage from "./Pages/OpenMarket/FisheryMarket";
import BirdsPage from "./Pages/OpenMarket/PoultryMarket";
import SeedlingsPage from "./Pages/OpenMarket/SeedsMarket";
import FieldsPage from "./Pages/OpenMarket/LandsMarket";
// import ProductCardPage from "./Pages/ProductCard/Pesticideindex";
import QuestionPage from "./Pages/Help";
import NewsPage from "./Pages/News-Blog/componenets/All-news";
import Wrapper from "./Util/withlayout";
import LayoutnewWrapper from "./Util/bloglayout";
// context
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path="/Touch"
          element={
            <Wrapper>
              <Touch />
            </Wrapper>
          }
        />
        <Route
          path="/About"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        >
          <Route index element={<Companyoverviewpage />} />
          <Route path="Companyoverviewpage" element={<Companyoverviewpage />} />
          <Route path="Executivespage" element={<Executivespage />} />
          <Route path="Choosepage" element={<Choosepage />} />
        </Route>

        <Route
          path="/RequestPlace"
          element={
            <Wrapper>
              <RequestPlace />
            </Wrapper>
          }
        />

        <Route
          path="/QuestionPage"
          element={
            <Wrapper>
              <QuestionPage />
            </Wrapper>
          }
        />

        <Route path="/MarketPlace" element={<MarketPlace />}>
          <Route index element={<AnimalsPage />} />
          <Route path="AnimalsPage" element={<AnimalsPage />} />
          <Route path="ChemicalPage" element={<ChemicalPage />} />
          <Route path="EquipmentsPage" element={<EquipmentsPage />} />
          <Route path="FishingPage" element={<FishingPage />} />
          <Route path="FeedPage" element={<FeedPage />} />
          <Route path="SeedlingsPage" element={<SeedlingsPage />} />
          <Route path="FertilizerPage" element={<FertilizerPage />} />
          <Route path="BirdsPage" element={<BirdsPage />} />
        </Route>
        {/* <Route path="/ProductCardPage" element={<ProductCardPage />} /> */}
        <Route path="/FieldsPage" element={<FieldsPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/Career" element={<Career />} />
        <Route path="*" element={<Errorpage />} />
        <Route
          path="/blog"
          element={
            <LayoutnewWrapper>
              <Blog />
            </LayoutnewWrapper>
          }
        >
          <Route index element={<NewsPage />} />
          <Route path="newspage" element={<NewsPage />} />
          <Route path="AnimalsPage" element={<AnimalsPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;
