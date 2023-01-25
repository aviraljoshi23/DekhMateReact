import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setneedroom } from "../Services/NeedRoom";
import { useNavigate } from "react-router-dom"
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/WebService";
export default function UserProfile() {
  let navigate = useNavigate();
  let { user } = useSelector(state => state.user.value);
  let { needroom } = useSelector(state => state.needroom.value);
  const Sdetail = ["Early Bird", "Wonderer", "Night Owl", "Fitness", "Pet Lover", "Party"];
  let userdate = useRef();
  let userPgender = useRef();
  let userHdetail = useRef();
  let description = useRef();
  let address = useRef();
  console.log(user);
  // let dispatch = useDispatch();
  const updateUser = () => {
    toast.success("Updated");
  }
  const updateAdditional = async (e) => {
    e.preventDefault();
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value)
    }
    alert(arr);
    let res = await WebService.postApi(WebApi.NEED_ROOM_UPDATE,
      {
        _id: needroom._id,
        user_id: user._id,
        userAddress: address.current.value,
        userPgender: userPgender.current.value,
        userHdetail: userHdetail.current.value,
        userSdetail: arr,
        userDate: userdate.current.value,
        userdescription: description.current.value
      });
    if (res.data.status) {
      toast.success("Updated");
      navigate("/")
      // toast.success(res.data.message);
    }
  }
  return <>
    <ToastContainer />
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src={"/UserProfiles/" + user.userProfileImage} alt="avatar"
              class="rounded-circle img-fluid" style={{ width: 150 }} />
            <h5 class="my-3">{user.userName}</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <input class="text-muted mb-0" defaultValue={user.userName} ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <input class="text-muted mb-0" defaultValue={user.userEmail} ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <input class="text-muted mb-0" defaultValue={user.userContact} ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" onClick={() => updateUser()} class="btn btn-outline-primary ms-1">Save Chane</button>
            </div>
          </div>
        </div>
      </div>
    </div>
       <hr width='100%'/>
    
    <div class=" container m-auto">
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Address Line 1</label>
          <input class="form-control" type="text" defaultValue={needroom.userAddress} ref={address} />
        </div>
        <div class="col-md-6 form-group">
          <label>Expected Shifting Date</label>
          <input class="form-control" type="date" defaultValue={needroom.userDate} ref={userdate} />
        </div>
        <div class="col-md-6 ">
          <div className="col-md-12 form-group">
            <label>Your Priority Gender</label>
            <select class="custom-select" ref={userPgender} >
              <option value={needroom.userPgender}>{needroom.userPgender}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>
          </div>
          <div class="col-md-12 form-group">
            <label>House details</label>
            <select class="custom-select" ref={userHdetail}>
              <option value={needroom.userHdetail}>{needroom.userHdetail}</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="Sepharate">Sepharate</option>
            </select>
          </div>
        </div>


        <div className="col-md-6 form-group">

          <label>Self Detail</label>

          {
            Sdetail.map(item => <div class="form-check">

              <input class="form-check-input" type="checkbox" defaultChecked={needroom.userSdetail.some((detail) => detail === item)} value={item} id="flexCheckDisabled" />
              <label class="form-check-label" for="flexCheckDisabled">
                {item}
              </label>
            </div>
            )
          }

        </div>

        <div className="col-md-12"><div class="form-group shadow-textarea">
          <label for="exampleFormControlTextarea6">Description</label>
          <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" ref={description} >{needroom.userdescription}</textarea>
        </div></div>

        <div class="card-footer border-secondary bg-transparent">
          <button class="btn btn-primary ms-1 font-weight-bold my-3 py-3 " onClick={(e) => { updateAdditional(e) }}>Update Detail</button>
        </div>

      </div>
    </div>
  </>
}