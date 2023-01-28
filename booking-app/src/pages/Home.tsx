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
      <div className='px-4 bg-blue-600'>
        <Navbar />
        <Header />
      </div>
      <div className='my-10'>
        <Featured />
        <PropertyList />
        <div className='w-full'></div>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
