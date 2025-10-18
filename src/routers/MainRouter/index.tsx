import { Home } from 'lucide-react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import Login from '../../pages/Login';
import Doctor from '../../pages/Doctor';
import Patient from '../../pages/Patient';
import Header from '../../components/Header';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className='pt-20'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/patient' element={<Patient />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
