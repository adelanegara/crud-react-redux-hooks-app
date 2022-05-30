import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./PrivateRoutes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route path="/add" element={<PrivateRoutes component={AddUser} />} />
          <Route
            path="/edit/:id"
            element={<PrivateRoutes component={EditUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
