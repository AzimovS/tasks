import React from "react";
import Main from "./pages/main/Main";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Main />
      </MovieProvider>
    </div>
  );
}

export default App;
