import { Dispatch, createContext, useEffect, useReducer } from "react";

type AuthUserData = {
  user: {
    userName: string;
    password: string;
  } | null;
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

const INITIAL_STATE: AuthUserData = {
  user: JSON.parse(localStorage.getItem("user") ?? "") || null,
  loading: false,
  error: null,
};

const INITIAL_CONTEXT: AuthContext = {
  state: INITIAL_STATE,
};
export const AuthContext = createContext(INITIAL_CONTEXT);

type props = {
  children?: JSX.Element | JSX.Element[];
};
export const AuthContextProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

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
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state: {
          user: null,
          loading: state.loading,
          error: state.error,
        },
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
