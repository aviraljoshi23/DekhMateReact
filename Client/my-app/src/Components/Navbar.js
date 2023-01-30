import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logOut } from '../Services/user.slice';
export default function Navbar() {
    let { isLoggedIn, user } = useSelector(state => state.user.value);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const signout = () => {
        dispatch(logOut());
        navigate("/");
    }
    return <>
        <div class="container-fluid">
            <div class="row border-top px-xl-5">




                {isLoggedIn &&
                    <div class="col-lg-3 d-none d-lg-block">
                        <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}>
                            <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Notifications</h5>
                            <i class="fa fa-angle-down text-primary"></i>
                        </a>
                        <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ width: 425, zIndex: 9 }}>
                            <div class="navbar-nav w-100">
                                {
                                    user.messageBox.map(item =>
                                        <a href="" class="nav-item nav-link"><img src={"/UserProfiles/" + item.userProfileImage} alt="avatar"
                                        class="rounded-circle img-fluid" style={{ width: 50 }} /> {item.userName} is looking for flat</a>
                                    )
                                }
                            </div>
                        </nav>
                    </div>
                }
                <div class="col-lg-9">
                    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" class="text-decoration-none d-block d-lg-none">
                            <h1 class="m-0"><span class="text-primary">Dekh</span>Mate</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav py-0">
                                <Link to="/" class="nav-item nav-link">Home</Link>
                                <Link to="/aboutUs" class="nav-item nav-link">About</Link>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Explore</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <Link to="/search-flat" class="dropdown-item">Search Flat</Link>
                                        <Link to="/getRoomi" class="dropdown-item">Search Roomi</Link>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Add Details</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <Link to="/addFlat" class="dropdown-item">Add Your Flat</Link>
                                        <Link to="/needRoom" class="dropdown-item">Add Your Details</Link>
                                    </div>
                                </div>
                                <Link to="/contactUs" class="nav-item nav-link">Contact</Link>
                                <Link to="/profilePage" class="nav-item nav-link">User Profile</Link>
                            </div>
                            {
                                !isLoggedIn &&
                                <Link class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/signIn">Sign In</Link>
                            }
                            {
                                !isLoggedIn &&
                                <Link class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/signUp">Sign Up</Link>
                            }
                            {
                                isLoggedIn &&
                                <Link to="/signIn" onClick={signout} className="nav-item nav-link">Sign Out {user.useEmail}</Link>
                            }
                            <a class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Join Now</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
}