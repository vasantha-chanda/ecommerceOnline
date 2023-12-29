import './App.css';

//import "react-toastify/dist/React-Toastify.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useHistory
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import CheckOut from './components/CheckOut';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/authSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);
  return (
    <div className='App'>
      
      <Router>
        
      <Navbar/>
      <Routes>
      <Route  path="/" element={<Home/>}>

</Route>
        <Route path="/cart" element={<Cart/>}>

        </Route>
        <Route path="/checkout-sucess" element={<CheckOut/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/not-found" element={<NotFound/>}>

        </Route>
        <Route path="*" element={<Navigate to="/not-found" />} />
       
      </Routes>
      
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App;
