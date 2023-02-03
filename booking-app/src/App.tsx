import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelSelected from "./pages/HotelSelected";
import HotelList from "./pages/HotelList";
import { PUBLIC as PUBLIC } from "./models";
import { Login, NotFound } from "@components";
import AuthGuard from "./guards/auth.guard";
import "./index.css";
import { SearchContext, SearchContextProvider } from "@context";

function App() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={PUBLIC.HOTELS} element={<HotelList />} />
          <Route path={PUBLIC.HOTEL_BY_ID} element={<HotelSelected />} />
          <Route element={<AuthGuard />}>
            <Route path={PUBLIC.LOGIN} element={<Login />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SearchContextProvider>
  );
}

export default App;
