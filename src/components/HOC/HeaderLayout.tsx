type props = {
  children?: JSX.Element | JSX.Element[];
};
function HeaderLayout({ children }: props) {
  return (
    <div className='px-4 bg-blue-600 w-full flex justify-center relative z-30'>
      <div className='max-w-[70rem]'>{children}</div>
    </div>
  );
}
export default HeaderLayout;
