import { useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/WebService";
export default function FlatDetails() {
    const location = useLocation();
    const flat = location.state;
    let navigate = useNavigate()
    console.log(flat);
    const { user } = useSelector(state => state.user.value);
    const checkPlans = () => {
        navigate("/plans")
    }

    const sendRequestEmail = (e) => {
        e.preventDefault();
        let obj = {
            senderId:user._id,
            senderName: user.userName,
            senderEmail:user.userEmail,
            senderRequirement:"I'm Intrested For the Place",
            reciverId:flat.userId._id,
            reciverName:flat.userId.userName,
            reciverEmail:flat.userId.userEmail,
        }
        console.log(obj);
        let res = WebService.postApi(WebApi.SEND_FLAT_REQUEST,obj);
        if(res.status){
            toast.success(res.data.message);
            
        }
    }

    return <>

        {/* <!-- Rooms Detail Start --> */}
        <ToastContainer></ToastContainer>
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <div id="product-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner border">
                            <div className="carousel-item active">
                                <img className="w-100 h-100" src={"http://localhost:3000/FlatImage/" + flat.flatImages[0]} alt="Image" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={"http://localhost:3000/FlatImage/" + flat.flatImages[1]} alt="Image" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={"http://localhost:3000/FlatImage/" + flat.flatImages[2]} alt="Image" />
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 h-100" src={"http://localhost:3000/FlatImage/" + flat.flatImages[3]} alt="Image" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                            <i className="fa fa-2x fa-angle-left text-dark"></i>
                        </a>
                        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                            <i className="fa fa-2x fa-angle-right text-dark"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-7 pb-5">
                    <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(50 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                    <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                <label className="custom-control-label" for="size-1">XS</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                <label className="custom-control-label" for="size-2">S</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                <label className="custom-control-label" for="size-3">M</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                <label className="custom-control-label" for="size-4">L</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                <label className="custom-control-label" for="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                <label className="custom-control-label" for="color-1">Black</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                <label className="custom-control-label" for="color-2">White</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                <label className="custom-control-label" for="color-3">Red</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                <label className="custom-control-label" for="color-4">Blue</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                <label className="custom-control-label" for="color-5">Green</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ "width": "130px" }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus" >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value="1" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                        <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Contact Owner</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Room Discription</h4>
                            <p>{flat.flatDescription}</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div class="col-lg-4">
                                    <div class="card mb-4">
                                        <div class="card-body text-center">
                                            <img src={"/UserProfiles/" + flat.userId.userProfileImage} alt="avatar"
                                                class="rounded-circle img-fluid" style={{ width: 150 }} />
                                            <h5 class="my-3">{flat.userId.userName}</h5>
                                            <p class="text-muted mb-1">Full Stack Developer</p>
                                            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                            <div class="d-flex justify-content-center mb-2">
                                                <button type="button" class="btn btn-outline-primary ms-1" onClick={checkPlans}>Call</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 class="mb-4">Share your Interest</h4>
                                    <hr/>
                                    <form onSubmit={(e) => sendRequestEmail(e)}>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn btn-primary px-3">Send your Interest</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- room  Detail End --> */}



    </>
}