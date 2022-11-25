import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Componentes a importar
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import Login from "./containers/User/Login/Login";
import Register from "./containers/User/Register/Register";
import Film from "./containers/Films/Films";
import Serie from "./containers/Series/Series";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/film" element={<Film />} />
          <Route path="/serie" element={<Serie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
