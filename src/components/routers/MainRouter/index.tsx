import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

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
      <Routes></Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
