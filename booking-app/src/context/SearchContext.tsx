import { ReactNode, createContext, useReducer } from "react";

type initial_state = {
  city: undefined | string;
  dates: string[] | undefined;
  options: {
    adult: undefined | string;
    children: undefined | string;
    room: undefined | number;
  };
};
const INITIAL_STATE: initial_state = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

type props = {
  children?: ReactNode;
};
export const SearchContextProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  function SearchReducer(state: any, action: any) {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
