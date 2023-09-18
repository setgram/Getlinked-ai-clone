import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Overview from "./pages/Overview";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
