import './App.css'

import Checkout from './components/Checkout';
import Home from './components/Home';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Checkout" element={<Checkout />} />

      </Routes>
    </>

  )
};
