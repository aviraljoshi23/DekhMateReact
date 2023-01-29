import { useRef } from 'react';
import { useSelector} from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import WebApi from '../WebWork/WebApi';
import WebService from '../WebWork/WebService';

function NeedRoom() {
  let { user } = useSelector(state => state.user.value);
  let Date = useRef();
  let lookingFor = useRef();
  let expectedRoomDetail = useRef();
  let roommateDescription = useRef();
  let requiredRent =  useRef();
  let roommateLocation = useRef();
  let roommatePersonalDetails = useRef();
  const savedata = async () => {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value)
    }
    let res = await WebService.postApi(WebApi.NEED_ROOM_ADD,
      {
        userId: user._id,
        roommateLocation: roommateLocation.current.value,
        roommatelookingFor: lookingFor.current.value,
        expectedRoomDetail: expectedRoomDetail.current.value,
        requiredRent :requiredRent.current.value,
        roommatePersonalDetails: arr,
        Date: Date.current.value,
        roommateDescription: roommateDescription.current.value
      });
    if (res.data.status) {
      toast.success("Your Listing Added");
    }
    else {
      toast.error("Internal Server Error");
    }

  }
  return (<>
   <ToastContainer/>
    <div className="container-fluid">
          <div class="col-lg-8">

            <div class=" mb-4" id="shipping-address">
              <h4 class="font-weight-semi-bold mb-4">Add RoomI Details </h4>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label>User Name</label>
                  <input class="form-control" type="text" defaultValue={user.userName} readOnly />
                </div>
                <div class="col-md-6 form-group">
                  <label>E-mail</label>
                  <input class="form-control" type="text" defaultValue={user.userEmail} readOnly />
                </div>
                <div class="col-md-6 form-group">
                  <label>Mobile No</label>
                  <input class="form-control" type="text" defaultValue={user.userContact} readOnly />
                </div>
                <div class="col-md-6 form-group">
                  <label>Gender</label>
                  <input class="form-control" type="text" defaultValue={user.userGender} readOnly />
                </div>
                <div class="col-md-6 form-group">
                  <label>Roommate Address </label>
                  <input class="form-control" type="text" placeholder="123 Street" ref={roommateLocation} />
                </div>
                <div class="col-md-6 form-group">
                  <label>Expected Rent </label>
                  <input class="form-control" type="number" placeholder="5000" ref={requiredRent} />
                </div>
                <div class="col-md-6 form-group">
                  <label>Expected Moving  Date</label>
                  <input class="form-control" type="date" placeholder="DarequiredRentte" ref={Date} />
                </div>

                <div class="col-md-6 ">
                  <div className="col-md-12 form-group">
                    <label>Prefered Gender</label>
                    <select class="custom-select" ref={lookingFor}>
                      <option value="">Select Here</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Any">Any</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <label>Type of House Looking for*</label>
                    <select class="custom-select" ref={expectedRoomDetail}>
                      <option value="">Select Here</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="Sepharate">Sepharate</option>
                    </select>
                  </div>
                </div>


                <div className="col-md-6 form-group">
                  <label>Self Detail</label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Night Owl" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Night Owl
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="flexCheckDisabled" value="Early Bird" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Early Bird
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Fitness" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Fitness
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Wponderer" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Wonderer
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Pet lover" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Pet lover
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Party" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Party
                    </label>
                  </div>
                </div>

                <div className="col-md-12"><div class="form-group shadow-textarea">
                  <label for="exampleFormControlTextarea6">Give Any Description </label>
                  <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." ref={roommateDescription}></textarea>
                </div></div>

                <div class="card-footer border-secondary bg-transparent">
                  <button class="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3 " onClick={savedata}>Add Detail</button>
                </div>

              </div>
            </div>
          </div>
        </div>
  </>)
}
export default NeedRoom;