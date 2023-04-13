import {
  Navbar,
  SearchItem,
  RecreationOptions,
  SearchItemLoading,
  HotelListTitleLoading,
  HeaderLayout,
  SearchAside,
  
} from '@components';
import { useContext } from 'react';
import { SearchContext } from '@context';
import { useHotelsSWR } from '@api';
import { uuid } from '@utils';

const HotelList = () => {
  
  const { state, dispatch } = useContext(SearchContext);

  const {
    data: hotelsReceived,
    isLoading,
    error,
  } = useHotelsSWR(state.city, null);

  return (
    <>
      <HeaderLayout>
        <Navbar />
        <RecreationOptions />
      </HeaderLayout>
      <div className='flex flex-wrap sm:flex-nowrap justify-center p-2 max-w-[70rem]  m-auto'>
        <SearchAside />
        <div className='p-2 w-full'>
          {hotelsReceived ? (
            <div className='p-2 rounded-md bg-gray-100 text-gray-700 capitalize font-bold text-2xl'>
              {hotelsReceived[0].name}
            </div>
          ) : (
            <HotelListTitleLoading />
          )}
          {hotelsReceived ? (
            hotelsReceived.map((hotel) => (
              <SearchItem key={uuid()} hotel={hotel} />
            ))
          ) : (
            <SearchItemLoading />
          )}
        </div>
      </div>
    </>
  );
};

export default HotelList;
