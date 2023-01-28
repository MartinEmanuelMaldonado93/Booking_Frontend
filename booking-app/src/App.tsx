import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import List from "./pages/HotelList";
import "./index.css";
import { PublicRoute } from "./models";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={PublicRoute.HOTELS} element={<List />} />
        <Route path={PublicRoute.HOTELS_ID} element={<HotelPage />} />
        <Route path={PublicRoute.LOGIN} element={<Login />} />
        <Route path='*' element={<div>404 Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
