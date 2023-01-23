import { useState } from "react";
import "./index.css";
// import "../tailwind/index.css";
import { Navbar } from "@components";
import Header from "./components/header/Header";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div className=''>
      <Navbar />
      <Header />
      <Featured />
      {/* <div className='homeContainer'>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
