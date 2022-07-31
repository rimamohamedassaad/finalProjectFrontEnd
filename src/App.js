import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import AddReport from './pages/addReports/AddReport';
import AllReports from './pages/allReports/AllReports';
import Contactus from './pages/contactus/Contactus';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/about" exact element={<Aboutus />} />
          <Route path="/contact" exact element={<Contactus />} />
          <Route path="/add-report" exact element={<AddReport />} />
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/profile" exact element={<Profile />} /> */}
            </Route>
        </Routes>
      </BrowserRouter>
      {/* <AllReports /> */}
    </div>
  );
}
export default App;
