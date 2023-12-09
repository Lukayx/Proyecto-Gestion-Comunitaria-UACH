//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import TabsPage from "./components/Tabs2"

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <h1>
        <TabsPage />
      </h1>
      
    </>
  );
}

export default App;
