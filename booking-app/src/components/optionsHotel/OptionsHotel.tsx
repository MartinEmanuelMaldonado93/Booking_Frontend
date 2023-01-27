import { optionsHotel } from "@types";
import { Dispatch, SetStateAction, useState } from "react";
import { FaPersonBooth } from "react-icons/fa";
type props = {
  options: optionsHotel;
  setOptions: Dispatch<SetStateAction<optionsHotel>>;
};
function OptionsHotel({ options, setOptions }: props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (name: keyof optionsHotel, operation: string) => {
    let prevCount = options[name] || 0;
    const actualCount = operation === "i" ? ++prevCount : --prevCount;

    setOptions((prev) => ({
      ...prev,
      [name]: actualCount,
    }));
  };
  const { adult , children, room } = options;

  return (
    <div className='flex  gap-2 items-center dropdown dropdown-hover dropdown-bottom dropdown-end'>
      <FaPersonBooth />
      <span
        tabIndex={0}
        className='flex gap-4 text-lg cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${adult} adult · ${children} children · ${room} room`}
      </span>
      <div
        tabIndex={0}
        className='dropdown-content menu bg-base-100 relative max-w-xs p-2 border border-gray rounded-md shadow-md text-center'
      >
        <div className='optionItem'>
          <span className='text-lg'>Adult</span>
          <div className='optionCounter'>
            <button
              disabled={adult <= 1}
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("adult", "d")}
            >
              -
            </button>
            <span className='text-lg mx-2'>{adult}</span>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("adult", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className='optionItem'>
          <span className='text-lg'>Children</span>
          <div className='optionCounter'>
            <button
              disabled={children <= 0}
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("children", "d")}
            >
              -
            </button>
            <span className='text-lg mx-2'>{children}</span>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("children", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className='optionItem'>
          <span className='text-lg'>Room</span>
          <div className='optionCounter'>
            <button
              disabled={room <= 1}
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("room", "d")}
            >
              -
            </button>
            <span className='text-lg mx-2'>{room}</span>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => handleOption("room", "i")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OptionsHotel };
