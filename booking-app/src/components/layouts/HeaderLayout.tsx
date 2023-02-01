import { ReactNode } from "react";

type props = {
  // children: JSX.Element | JSX.Element[];
  children: ReactNode;
};
function HeaderLayout({ children }: props) {
  return (
    <div className='px-4 bg-blue-600 w-full flex justify-center'>
      <div className='max-w-[70rem]'>{children}</div>
    </div>
  );
}
export default HeaderLayout;
