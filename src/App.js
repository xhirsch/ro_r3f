import React, { Suspense } from "react";
import Bandcamp from "./components/Bandcamp";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <LandingPage />
        <Bandcamp />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
