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
    <div className='h-screen flex flex-col justify-between content-center items-center mx-auto'>
      <div className='px-4 bg-blue-600 w-screen flex justify-center'>
        <div className='max-w-[70rem]'>
          <Navbar />
          <Header />
        </div>
      </div>
      <div className='my-10 bg-white max-w-[70rem]'>
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
