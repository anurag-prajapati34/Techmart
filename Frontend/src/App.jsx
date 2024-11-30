import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";

import { Outlet } from "react-router-dom";

import { toast, Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
