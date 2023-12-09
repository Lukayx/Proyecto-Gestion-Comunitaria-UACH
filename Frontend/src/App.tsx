import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TabsPage from "./components/Tabs";
import Login from "./components/Login";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      
      {!authenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>
            <TabsPage />
          </h1>
          {/* Otros componentes que deseas mostrar después de la autenticación */}
        </>
      )}
    </>
  );
}

export default App;
