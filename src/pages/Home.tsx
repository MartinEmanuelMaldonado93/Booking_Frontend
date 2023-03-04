import {
  Navbar,
  Featured,
  PropertyList,
  FeaturedProperties,
  Footer,
  MailList,
  HeaderSearchBar,
} from "@components";
import { useHotelsSWR, useLocationsSWR } from "@constants";
import { HotelParams } from "@types";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  return (
    <div className='h-screen w-full flex flex-col justify-between gap-16 content-center items-center mx-auto bg-white overflow-x-hidden'>
      <div className='px-4 bg-blue-600 w-full flex justify-center'>
        <div className='max-w-[70rem]'>
          <Navbar />
          <HeaderSearchBar />
        </div>
      </div>
      <div className='flex flex-col gap-6 max-w-[70rem] w-full bg-white'>
        {/* <Featured /> */}
        {/* <PropertyList /> */}
        {/* <FeaturedProperties /> */}
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
