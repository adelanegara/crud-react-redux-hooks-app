import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GlobalProvider } from "./Context/GlobalState";
import { ToastContainer } from "react-toastify";
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
      {/* <GlobalProvider> */}
      <Router>
        <div>
          <Navbar />
          <ToastContainer />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          {/* <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route path="/add" element={<PrivateRoutes component={AddUser} />} />
          <Route
            path="/edit/:id"
            element={<PrivateRoutes component={EditUser} />}
          /> */}
        </Routes>
      </Router>
      {/* </GlobalProvider> */}
    </div>
  );
}

export default App;
