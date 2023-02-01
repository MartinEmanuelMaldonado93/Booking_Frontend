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
        <Route path='*' element={<div>404 Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
