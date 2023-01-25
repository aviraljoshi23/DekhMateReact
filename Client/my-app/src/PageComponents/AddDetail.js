import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setneedroom } from '../Services/NeedRoom';
import WebApi from '../WebWork/WebApi';
import WebService from '../WebWork/WebService';

function NeedRoom() {
  let { user } = useSelector(state => state.user.value);
  let userdate = useRef();
  let userPgender = useRef();
  let userHdetail = useRef();
  let description = useRef();
  let address = useRef();
  console.log(user);
 const dispatch=useDispatch();
  const savedata = async () => {
    // alert("data saved");
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value)
    }
    alert(arr);
    let res = await WebService.postApi(WebApi.NEED_ROOM_ADD,
      {
          user_id:user._id,
           userAddress:address.current.value,
          userPgender:userPgender.current.value,
          userHdetail:userHdetail.current.value,
          userSdetail:arr,
          userDate:userdate.current.value,
           userdescription:description.current.value
      });
  if (res.data.status) {
    console.log(res.data.result);
    dispatch(setneedroom(res.data.result));
    alert("Successfully");
      // toast.success(res.data.message);
  }


  }
  return (<>
    <div className="container">
      <div class="container-fluid pt-5">
        <div class="row px-xl-5">
          <div class="col-lg-8">

            <div class=" mb-4" id="shipping-address">
              <h4 class="font-weight-semi-bold mb-4">Add Details</h4>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label> Name</label>
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
                  <label>Address Line 1</label>
                  <input class="form-control" type="text" placeholder="123 Street" ref={address} />
                </div>
                <div class="col-md-6 form-group">
                  <label>Expected Shifting Date</label>
                  <input class="form-control" type="date" placeholder="Date" ref={userdate} />
                </div>



                <div class="col-md-6 ">
                  <div className="col-md-12 form-group">
                    <label>Your Priority Gender</label>
                    <select class="custom-select" ref={userPgender}>
                      <option value="">Select Here</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Any">Any</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <label>House details</label>
                    <select class="custom-select" ref={userHdetail}>
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
                  <label for="exampleFormControlTextarea6">Description</label>
                  <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." ref={description}></textarea>
                </div></div>

                <div class="card-footer border-secondary bg-transparent">
                  <button class="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3 " onClick={savedata}>Add Detail</button>
                </div>

              </div>
            </div>




          </div>

        </div>
      </div>



    </div>

  </>)
}
export default NeedRoom;