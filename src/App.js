import './App.css';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './pages/Aboutus/Aboutus';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Login /> */}
      <Aboutus/>
    </div>
  );
}
export default App;
