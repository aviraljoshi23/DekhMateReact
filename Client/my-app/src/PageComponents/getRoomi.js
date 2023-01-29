import { useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function GetRoomi(){
    const {findRoommateList}  = useSelector(state=>state.getRoommate.value);
    console.log(findRoommateList);
    let navigate = useNavigate();
    const viewRoommate = (e,item)=>{
        e.preventDefault();
        navigate("/viewRoomMate",{state:item});
    }
    return<>
    <ToastContainer></ToastContainer>
        <div className="container-fluid bg-secondary mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "300px" }}>
                <h1 className="font-weight-semi-bold text-uppercase mb-3">Find Room Partner</h1>
                <div className="d-inline-flex">
                    <p className="m-0"><a href="">Home</a></p>
                    <p className="m-0 px-2">-</p>
                    <p className="m-0">Shop</p>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}

        {/* <!-- Shop Start --> */}
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                {/* <!-- Shop Sidebar Start --> */}
                <div className="col-lg-3 col-md-12">
                    {/* <!-- Price Start --> */}
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Filter by flat price</h5>
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="price-all" />
                                <label className="custom-control-label" for="price-all">All Price</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-1" />
                                <label className="custom-control-label" for="price-1">$0 - $100</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-2" />
                                <label className="custom-control-label" for="price-2">$100 - $200</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-3" />
                                <label className="custom-control-label" for="price-3">$200 - $300</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-4" />
                                <label className="custom-control-label" for="price-4">$300 - $400</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="price-5" />
                                <label className="custom-control-label" for="price-5">$400 - $500</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>

                    {/* <!-- filers Start --> */}
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="color-all" />
                                <label className="custom-control-label" for="price-all">All Color</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-1" />
                                <label className="custom-control-label" for="color-1">Black</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-2" />
                                <label cresultlassName="custom-control-label" for="color-2">White</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-3" />
                                <label className="custom-control-label" for="color-3">Red</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-4" />
                                <label className="custom-control-label" for="color-4">Blue</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="color-5" />
                                <label className="custom-control-label" for="color-5">Green</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    {/* <!-- filter End --> */}

                    {/* <!-- Size Start --> */}
                    <div className="mb-5">
                        <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="size-all" />
                                <label className="custom-control-label" for="size-all">All Size</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" for="size-1">XS</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" for="size-2">S</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-3" />
                                <label className="custom-control-label" for="size-3">M</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-4" />
                                <label className="custom-control-label" for="size-4">L</label>
                                <span className="badge border font-weight-nShopormal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" for="size-5">XL</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Size End --> */}
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* <!-- rooms Start --> */}
                <div className="col-lg-9 col-md-12">
                    <div className="container py-5">
                        <div className="text-center mb-5">
                            <h5 className="text-primary text-uppercase mb-3" style={{ "letterSpacing": "5px" }}>Courses</h5>
                            <h1>Our Popular Courses</h1>
                        </div>
                        <div className="row">
                            <div class="col-12 pb-1">
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <form action="">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search by Area" />
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-transparent text-primary">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="dropdown ml-4">
                                        <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Sort by
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                            <a class="dropdown-item" href="#">Rent</a>
                                            <a class="dropdown-item" href="#">Popularity</a>
                                            <a class="dropdown-item" href="#">Best Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              {
                                findRoommateList.map((item) =>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="rounded overflow-hidden mb-2">
                                            <img className="img-fluid"  src={"http://localhost:3000/UserProfiles/" + item.userId.userProfileImage} alt=""  />
                                            <div className="bg-secondary p-4">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>{item.roommatelookingFor}</small>
                                                    <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>{item.Date}</small>
                                                </div>
                                                <a className="h5" href="" onClick={(e)=>viewRoommate(e,item)}>{item.roommateLocation.substr(0,13)}....</a>
                                                <h6 className="mt-3">{item.userId.userName}</h6>
                                                <div className="border-top mt-4 pt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>45% Match</h6>
                                                        <h6 className="m-0">Expected Rent {item.requiredRent}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            } 

                        </div>
                    </div>
                </div>
                {/* <!-- roooms End --> */}
            </div>
        </div>
    </>
}