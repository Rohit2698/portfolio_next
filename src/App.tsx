import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./container/header";
import AbountMe from "./container/about";
import ExperienceContent from "./container/experience";
import Work from "./container/work";
import AnimatedCursor from "./container/cursor";
import Contact from "./container/contact";
import Navbar from "./container/navbar";
import Footer from "./container/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Header />
      <AbountMe />
      <ExperienceContent />
      <Work />
      <Contact />
      <Footer />
      <AnimatedCursor />
    </>
  );
}

export default App;
