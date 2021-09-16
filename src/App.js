import "./App.css";
import Login from "./Components/Login";

// import UserDetails from "../components/UserDetails";
import UserDetails from "./Components/Userdetails";
import {useSelector,useDispatch} from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
  import "react-toastify/dist/ReactToastify.css";


function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
    toast.success("Logged out!");
  }

  return (
    <div className="App">
      <ToastContainer/>
      {isLoggedIn? (
      <>
      <button onClick={handleLogout} className="logout-btn" style={{position:"fixed"}}>Logout</button>
      <UserDetails/>
      </>):(<Login/>)}
    </div>
  );
}

export default App;
