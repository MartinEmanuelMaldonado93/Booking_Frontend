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
  dispatch?: Dispatch<SearchAction>;
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
};

export const SearchContext = createContext<DestinationContext>(INITIAL_CONTEXT);

export const SearchContextProvider = ({ children }: propsProvider) => {
  const [state, dispatch] = useReducer(setSearch, INITIAL_STATE);

  function setSearch(state: SearchedDestination, action: SearchAction) {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload; // new data
      case "RESET_SEARCH":
        return state;
      default:
        throw new Error("No action defined in context provider");
    }
  }

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
