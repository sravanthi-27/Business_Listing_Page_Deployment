import React from "react";
import Header from "./components/Header";
import HeaderSectionService from "./components/HeaderSectionService";
import ServiceDetail from "./components/ServiceDetail";
import AboutBusinessSection from "./components/AboutBusinessSection";
import PartnerSection from "./components/PartnerSection";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header/>
      <HeaderSectionService/>
      <ServiceDetail/>
      <AboutBusinessSection/>
      <PartnerSection/>
      <Footer/>
    </div>
    
  )
}
export default App;