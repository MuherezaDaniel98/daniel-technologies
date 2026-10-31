import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Components/About.jsx";
import CallToAction from "./Components/CallToAction.jsx";
import Contact from "./Components/Contact.jsx";
import Courses from "./Components/Courses.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Navbar from "./Components/NavBar.jsx";
import Services from "./Components/Services.jsx";
import { FALLBACK } from "./data/siteData.js";

export default function App() {
  const [items, setItems] = useState(FALLBACK);

  useEffect(() => {
    fetch("/api/services")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => {
        if (data.length) setItems(data);
      })
      .catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Courses items={items} preview />
                <About />
                <CallToAction />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <CallToAction />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <Courses items={items} />
                <CallToAction />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services items={items} />
                <CallToAction />
              </>
            }
          />
          <Route path="/contact" element={<Contact items={items} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
