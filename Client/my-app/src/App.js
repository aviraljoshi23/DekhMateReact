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
function App() {
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
      <Route path="/profilePage" element={<UserProfile></UserProfile>}></Route>

    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
