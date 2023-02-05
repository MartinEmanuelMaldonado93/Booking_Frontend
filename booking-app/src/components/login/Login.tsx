import { getUser } from "@services";
import { createUser } from "@reduxState";
import { ChangeEvent, MouseEventHandler, useContext, useState } from "react";
import { User } from "@types";
import { BASE_URL, PRIVATE, UserInfo } from "../../models";
import { UseFetch } from "@hooks";
import { FaAirbnb } from "react-icons/fa";
import { AuthContext } from "@context";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  
  async function handleLogin(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    dispatch!({
      type: "LOGIN_START",
      payload: { error: null, loading: false, user: null },
    }); //todo***

    const options: RequestInit = {
      method: "POST",
      headers: {
        cookie: `${localStorage.getItem("access_token") ?? ""}`,
        "Content-Type": "application/json",
      },
      body: `${JSON.stringify(credentials)}`,
    };
    fetch(`${BASE_URL}/api/auth/login`, options)
      .then((resp) => {
        if (!resp.ok) {
          dispatch!({
            type: "LOGIN_FAILURE",
            payload: {
              user: null,
              loading: false,
              error: resp.status,
            },
          });
          return Promise.reject(resp.statusText);
        }

        return resp.json();
      })
      .then((user: UserInfo) => {
        dispatch!({
          type: "LOGIN_SUCCESS",
          payload: { user, error: false, loading: false },
        });
        navigate(PRIVATE.CHECKOUT);
      })
      .catch(console.log);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target) return;

    const { target } = event;
    setCredentials((prev) => ({ ...prev, [target.id]: target.value }));
  }

  return (
    <div className='max-w-xs m-auto h-screen form-control justify-center gap-6 '>
      <div className='text-center p-4 font-bold shadow-md rounded-md'>
        <FaAirbnb className='mr-2 inline' />
        MartinBooking
      </div>
      <input
        onChange={handleChange}
        id='userName'
        placeholder='Enter your user name'
        type='email'
        className='input input-bordered w-full max-w-xs'
      />
      <input
        onChange={handleChange}
        id='password'
        placeholder='Enter your password'
        type='password'
        className='input input-bordered w-full max-w-xs'
      />
      <button onClick={handleLogin} className='btn btn-primary'>
        Login
      </button>
      {state.error ? <span>{state.error.message}</span> : null}
    </div>
  );
}
export default Login;
