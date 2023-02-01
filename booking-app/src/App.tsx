import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import List from "./pages/HotelList";
import { PublicRoute } from "./models";
import Login from "./pages/Login/Login";
import AuthGuard from "./guards/auth.guard";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={PublicRoute.HOTELS} element={<List />} />
        <Route path={PublicRoute.HOTELS_ID} element={<HotelPage />} />
        <Route element={<AuthGuard />}>
          <Route path={PublicRoute.LOGIN} element={<Login />} />
        </Route>
        <Route
          path='*'
          element={
            <div className='alert shadow-lg'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='stroke-info flex-shrink-0 w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                <span>404 Not found.</span>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
