import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelSelected from './pages/HotelSelected';
import HotelList from './pages/HotelList';
import { PRIVATE, PUBLIC } from './routes';
import { Login, NotFound, Reserved } from '@components';
import AuthGuard from './guards/auth.guard';
import './index.css';
import { AuthContextProvider, SearchContextProvider } from '@context';

function App() {
  return (
    <SearchContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={PUBLIC.HOME} element={<Home />} />
            <Route path={PUBLIC.HOTELS_LIST} element={<HotelList />} />
            <Route path={PUBLIC.HOTEL_SELECTED} element={<HotelSelected />} />
            <Route path={PUBLIC.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={PRIVATE.PURCHASE} element={<Reserved />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </SearchContextProvider>
  );
}

export default App;
