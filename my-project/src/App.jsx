import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Overview from "./pages/Overview";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Register from "./components/Register";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-line" element={<Timeline />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
