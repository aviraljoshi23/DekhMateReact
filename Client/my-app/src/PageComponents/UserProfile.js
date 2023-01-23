import { useRef } from "react";
import { useSelector } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/WebService";
export default function UserProfile() {
    let { user } = useSelector(state => state.user.value);
    console.log(user);
    let userContactField = useRef();
    let userNameField = useRef();
    let fileName  =   useRef(user.userProfileImage);
    let  navigate
    const updateUser= async()=>{
        // let obj = {
        //     _id:user._id,/home/foundation/Desktop/DekhMate
        //     userName:userNameField.current.value,
        //     userEmail:user.userEmail,
        //     userContact:userContactField.current.value,
        //     userPassword:user.userPassword,
        //     userGender:user.userGender,
        //     userProfileImage:userProfileImage,
        // }
        let formData =  new FormData()
        formData.append("userProfileImage",fileName);
        formData.set("userName",userNameField.current.value);
        formData.set("userEmail",user.userEmail);
        formData.set("userContact",userContactField.current.value);
        formData.set("userPassword",user.userPassword);
        formData.set("userGender",user.userGender);
        formData.set("_id",user._id);
        console.log(formData);
        let response = await WebService.postApi(WebApi.USER_UPDATE,formData);
        if(response.status){
            toast.success("Updated");
        }
    }
    const onFileChange = (event)=>{
        fileName = event.target.files[0];
      }
    return <>
    <ToastContainer/>
            <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <img src={"/UserProfiles/" + user.userProfileImage} alt="avatar"
                            class="rounded-circle img-fluid" style={{ width: 150 }} />
                            <div class="col-sm-9 ml-5">
                            <input type="file" onChange={onFileChange} className="form-controll ml-5"></input>
                            </div>
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
                                <input class="text-muted mb-0 form-control" ref={userNameField} defaultValue={user.userName}></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <input class="text-muted mb-0 form-control" defaultValue={user.userEmail} ></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Mobile</p>
                            </div>
                            <div class="col-sm-9">
                                <input class="text-muted mb-0 form-control"ref={userContactField} defaultValue={user.userContact} ></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mb-2">
                            <button type="button" onClick={()=>updateUser()} class="btn btn-outline-primary ms-1">Save Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>             
}