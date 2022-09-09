import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Pages/Weather";
import Todo from "./Pages/Todo";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App vh-100 vw-100 bg-dark text-white">

      <nav className="navbar shadow navbar-expand border-bottom border-primary border-3 navbar-dark">
        <div className="container">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/todo" className="nav-link">Todo App</a></li>
            <li className="nav-item"><a href="/weather" className="nav-link">Weather App</a></li>
          </ul>
        </div>
      </nav>

      <div className="container d-flex justify-content-center my-5">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/weather' element={<Weather />} />
            <Route exact path='/todo' element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
