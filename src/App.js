import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import PrivateRoutes from "./PrivateRoutes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/add" element={<AddUser />}>
            {" "}
          </Route>
          <Route path="/edit/:id" element={<EditUser />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
