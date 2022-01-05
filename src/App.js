import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        <h1>App</h1>
        <Routes>
          <Route path="/register"></Route>
          <Route path="/login"></Route>
          <Route path="/contacts"></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
