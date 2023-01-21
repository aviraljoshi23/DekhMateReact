export default function HaveFlat() {
    return <>

        {/* <!-- Page Header Start --> */}
        <div className="container-fluid bg-secondary mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "300px" }}>
                <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
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
                        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
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
                    {/* <!-- Price End --> */}

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
                                <label className="custom-control-label" for="color-2">White</label>
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
                                <span className="badge border font-weight-normal">145</span>
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
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-2.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-3.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-4.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-5.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src="img/course-6.jpg" alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <a className="h5" href="">Web design & development courses for beginner</a>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 className="m-0">$99</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- roooms End --> */}
            </div>
        </div>


    </>
}