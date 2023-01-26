import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
  Footer,
  MailList,
} from "@components";

function Home() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      {/* <Navbar /> */}
      <h1>HOME PAGE</h1>
      <Header />
      {/* <PropertyList /> */}
      <div className='flex flex-wrap gap-4'>
        {/* <Featured /> */}
        <div className="w-full"></div>
        {/* <h1 className='homeTitle'>Browse by property type</h1> */}
        {/* <h1 className='homeTitle'>Homes guests love</h1> */}
        {/* <FeaturedProperties /> */}
        {/* <MailList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
