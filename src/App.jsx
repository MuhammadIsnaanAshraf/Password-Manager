import { useState } from "react";

import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Manager } from "./Component/Manager";
import { Footer } from "./Component/Footer";
function App() {
  return (
    // <>
    <div className="h-[100vh] flex flex-col">
      <Navbar />
      <Manager />
      <Footer />
    </div>
    // </>
  );
}

export default App;
