import { useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
export default function UserProfile() {
    let { user } = useSelector(state => state.user.value);
    console.log(user);
    const updateUser=()=>{
        toast.success("Updated");
    }
    return <>
    <ToastContainer/>
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
                                <input class="text-muted mb-0" defaultValue={user.userName}></input>
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
                            <button type="button" onClick={()=>updateUser()} class="btn btn-outline-primary ms-1">Save Chane</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>             
}