import { ChangeEvent, useContext, useState } from 'react';
import { PUBLIC } from '@routes';
import { FaAirbnb } from 'react-icons/fa';
import { AuthContext } from '@context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });
  const { state, dispatch } = useContext(AuthContext);
  
  const navigate = useNavigate();

//   async function handleLogin(
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) {
//     event.preventDefault();

//     dispatch!({
//       type: 'LOGIN_START',
//       payload: {},
//     });

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/auth/login`,
//         credentials
//       );
//       const user = await response.data;

//       dispatch!({
//         type: 'LOGIN_SUCCESS',
//         payload: { user },
//       });
//       navigate(PUBLIC.HOME);
//     } catch (error) {
//       dispatch!({
//         type: 'LOGIN_FAILURE',
//         payload: {
//           error: 505,
//         },
//       });
//     }
//   }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target) return;

    const { target } = event;
    setCredentials((prev) => ({ ...prev, [target.id]: target.value }));
  }

  return (
    <div className='max-w-xs m-auto h-screen form-control justify-center gap-6 bg-white'>
      <div
        onClick={() => navigate(PUBLIC.HOME)}
        className='text-center p-4 font-bold shadow-md rounded-md'
      >
        <FaAirbnb className='mr-2 inline' />
        MartinBooking
      </div>
      <input
        onChange={handleChange}
        id='userName'
        placeholder='Enter your user name'
        type='email'
        className='input input-bordered bg-white w-full max-w-xs'
      />
      <input
        onChange={handleChange}
        id='password'
        placeholder='Enter your password'
        type='password'
        className='input input-bordered bg-white w-full max-w-xs'
      />
      {/* <button onClick={handleLogin} className='btn btn-primary'>
        Login
      </button> */}
      {state.error ? <span>{state.error.message}</span> : null}
    </div>
  );
}
export default Login;
