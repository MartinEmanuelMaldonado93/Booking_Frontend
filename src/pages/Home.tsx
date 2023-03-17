import {
  Navbar,
  Featured,
  PropertyList,
  FeaturedProperties,
  Footer,
  MailList,
  HeaderSearchBar,
  HeaderLayout,
} from "@components";

function Home() {
  return (
    <div className='h-screen w-full flex flex-col justify-between gap-16 content-center items-center mx-auto bg-white overflow-x-hidden'>
      <HeaderLayout>
        <Navbar />
        <HeaderSearchBar />
      </HeaderLayout>
      <div className='flex flex-col gap-6 max-w-[70rem] w-full bg-white'>
        <Featured />
        <PropertyList />
        {/* <FeaturedProperties /> */}
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
