import { OptionsHotelType } from '@types';
import { Dispatch, createContext, useReducer } from 'react';
import type { Range } from 'react-date-range/index';

export type SearchedDestination = {
  city: string;
  destination_id?: number | string;
  type?: string;
  dates: Range[] | [];
  options: OptionsHotelType;
};

type SearchAction = {
  type: 'NEW_SEARCH' | 'RESET_SEARCH'; // literal type ideally besides enums.
  payload: SearchedDestination;
};

type DestinationContext = {
  state: SearchedDestination;
  dispatch?: Dispatch<SearchAction>;
};

const initialState: SearchedDestination = {
  city: 'madrid',
  dates: [defaultDates()],
  type: 'city',
  destination_id: '-979186', // corresponds to Argentina
  options: {
    adult: 1,
    children: 0,
    room: 0,
  },
};

const initialContext: DestinationContext = {
  state: initialState,
};

export const SearchContext = createContext<DestinationContext>(initialContext);

type props = {
  children?: JSX.Element | JSX.Element[];
};
export const SearchContextProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(setSearch, initialState);

  function setSearch(state: SearchedDestination, action: SearchAction) {
    switch (action.type) {
      case 'NEW_SEARCH':
        return action.payload; // new data
      case 'RESET_SEARCH':
        return initialState;
      default:
        throw new Error('No action defined in context provider');
    }
  }

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

/** utils */

/** generate random dates */
function defaultDates(): Range {
  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 7);
  return {
    startDate: start,
    endDate: end,
    key: 'selection',
  };
}
