import { Navbar } from "@components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Reserved() {
  const navigate = useNavigate();
  useEffect(() => {
    // setTimeout(() => navigate("/"), 2000);
  }, []);
  return (
    <div className='flex flex-col h-screen'>
      <div className='bg-blue-400'>
        <div className='max-w-[70rem] '>
          <Navbar />
        </div>
      </div>
      <div className='alert alert-success shadow-lg justify-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>
    </div>
  );
}
export default Reserved;
