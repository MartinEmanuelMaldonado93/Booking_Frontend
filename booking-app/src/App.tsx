import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/Hotel";
import List from "./pages/List";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<HotelPage />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
