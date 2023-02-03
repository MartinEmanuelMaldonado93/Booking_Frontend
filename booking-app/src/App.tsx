import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import List from "./pages/List";
import { PublicRoute as Public } from "./models";
import { Login, NotFound } from "@components";
import AuthGuard from "./guards/auth.guard";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={Public.HOTELS} element={<List />} />
        <Route path={Public.HOTELS_ID} element={<HotelPage />} />
        <Route element={<AuthGuard />}>
          <Route path={Public.LOGIN} element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
