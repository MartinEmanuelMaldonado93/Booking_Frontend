// import { useDispatch } from "react-redux";
import { getUser } from "@services";
import { createUser } from "@reduxState";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { User } from "@types";
import { UserInfo } from "src/models";
import { UseFetch } from "@hooks";
import { FaAirbnb } from "react-icons/fa";

function Login() {
  const [userLogin, setUser] = useState({
    userName: "",
    password: "",
  });
  // const dispatch = useDispatch();

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const options: RequestInit = {
      method: "POST",
      headers: {
        cookie: `${localStorage.getItem("access_token") ?? ""}`,
        "Content-Type": "application/json",
      },
      body: `${JSON.stringify(userLogin)}`,
    };

    fetch("http://localhost:8800/api/auth/login", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target) return;

    const t = event.target;
    setUser((prev) => ({ ...prev, [t.id]: t.value }));
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
    </div>
  );
}
export default Login;
