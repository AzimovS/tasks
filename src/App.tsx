import React from "react";
import Main from "./pages/main/Main";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/navBar/NavBar";
import { UserContext, UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <NavBar />
      </UserProvider>
      <div className="App">
        <MovieProvider>
          <Main />
        </MovieProvider>
      </div>
    </div>
  );
}

export default App;
