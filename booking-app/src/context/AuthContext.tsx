import { getUserFromLocalStorage, setUserToLocalStorage } from "@utils";
import { Dispatch, createContext, useEffect, useReducer } from "react";
import { UserInfo } from "src/models";

const KEY_STORAGE = "user_martinbooking";

type AuthUserData = {
  user: UserInfo | null;
  loading: boolean;
  error: any;
};

type AuthUserAction = {
  type: "LOGIN_START" | "LOGOUT" | "LOGIN_SUCCESS" | "LOGIN_FAILURE";
  payload: AuthUserData;
};

type AuthContext = {
  state: AuthUserData;
  dispatch?: Dispatch<AuthUserAction>; // "?" important for ts check
};

const userInit = getUserFromLocalStorage(KEY_STORAGE);

const initialState: AuthUserData = {
  user: userInit,
  loading: false,
  error: null,
};

const initialContext: AuthContext = {
  state: initialState,
};
export const AuthContext = createContext(initialContext);

type props = {
  children?: JSX.Element | JSX.Element[];
};
export const AuthContextProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  function AuthReducer(state: AuthUserData, action: AuthUserAction) {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          loading: true,
          error: null,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload.user,
          loading: false,
          error: null,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          loading: false,
          error: action.payload.error,
        };
      case "LOGOUT":
        return {
          user: null,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }

  useEffect(() => {
    setUserToLocalStorage(KEY_STORAGE, state.user);
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
