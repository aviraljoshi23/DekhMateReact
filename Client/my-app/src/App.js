import TopBar from "./Components/TopBar";
import SignUp from "./PageComponents/signup";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import SignIn from "./PageComponents/signIn";
import Footer from "./Components/Footer";
import UserProfile from "./PageComponents/UserProfile";
import Index from "./Components/Index";
import ContactUs from "./PageComponents/ContactUs";
import AboutUs from "./Components/AboutUs";
import HaveFlat from "./PageComponents/haveFlat";
import FlatDetails from "./PageComponents/flatDetails";
import AddFlat from "./PageComponents/addFlat";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFlats } from "./Services/flat.slice";
import { fetchNeedRoom } from "./Services/needRoom.slice";
import NeedRoom from "./PageComponents/addDetail";
import GetRoomi from "./PageComponents/getRoomi";
import ViewRoomMate from "./PageComponents/viewRoommate";
import Plans from "./PageComponents/plans";
function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchFlats());
    dispatch(fetchNeedRoom());
  },[])
  return (
    <BrowserRouter>
    <TopBar></TopBar>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
      <Route path="/roomDetail" element={<FlatDetails></FlatDetails>}></Route>
      <Route path="/search-flat" element={<HaveFlat></HaveFlat>}></Route>
      <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
      <Route path="/profilePage" element={<ProtectedRoute> <UserProfile></UserProfile></ProtectedRoute>}></Route>
      <Route path="/addFlat" element={<ProtectedRoute><AddFlat></AddFlat></ProtectedRoute>}></Route>
      <Route path="/needRoom" element={<ProtectedRoute><NeedRoom></NeedRoom></ProtectedRoute>}/>
      <Route path="/getRoomi" element={<GetRoomi></GetRoomi>}></Route>
      <Route path="/viewRoomMate" element={<ViewRoomMate></ViewRoomMate>}></Route>
      <Route path="/plans" element={<Plans></Plans>}></Route>
      
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
