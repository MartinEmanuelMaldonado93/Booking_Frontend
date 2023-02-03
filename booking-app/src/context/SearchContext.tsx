import { optionsHotel } from "@types";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import type { Range } from "react-date-range/index";
type propsProvider = {
  children?: ReactNode;
};

type SearchedDestination = {
  city: undefined | string;
  dates?: Range[];
  options: optionsHotel;
};

type SearchAction = {
  type: "NEW_SEARCH" | "RESET_SEARCH"; // literal type ideally besides enums.
  payload: SearchedDestination;
};

type DestinationContext = {
  state: SearchedDestination;
  dispatch: Dispatch<SearchAction>;
};

const INITIAL_STATE: SearchedDestination = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

const INITIAL_CONTEXT: DestinationContext = {
  state: INITIAL_STATE,
  dispatch: () => null,
};

export const SearchContext = createContext<DestinationContext>(INITIAL_CONTEXT);

export const SearchContextProvider = ({ children }: propsProvider) => {
  const [state, dispatch] = useReducer(dispatchSearch, INITIAL_STATE);

  function dispatchSearch(state: SearchedDestination, action: SearchAction) {
    const { type, payload } = action;
    switch (type) {
      case "NEW_SEARCH":
        return payload; // new data
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
