import { useRef, useState } from 'react';
import WebService from '../WebWork/WebService';
import WebApi from '../WebWork/WebApi';
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {

    let userPasswordField = useRef();
    let userEmailField = useRef();
    let userContactField = useRef();
    let userNameField = useRef();
    const [userGender, setGender] = useState();

    const NewAccount = async (e) => {
        e.preventDefault();
        let obj = {
            userEmail: userEmailField.current.value,
            userPassword: userPasswordField.current.value,
            userGender: userGender,
            userProfileImage: "",
        }
        console.log(obj);
        let res = await WebService.postApi(WebApi.USER_SIGNUP,
            {
                userEmail: userEmailField.current.value,
                userName:userNameField.current.value,
                userContact:userContactField.current.value,
                userPassword: userPasswordField.current.value,
                userGender: userGender,
                userProfileImage: ""
            });
        if (res.data.status) {
            toast.success(res.data.message);
        }
    }
    return <>
        <ToastContainer/>
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Sign Up Here</h5>
                    <h1>Get Your Perfect Roomi</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form bg-secondary rounded p-5">
                            <div id="success"></div>
                            <form onSubmit={(e) => { NewAccount(e) }}>
                                <div class="control-group">
                                    <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email" ref={userEmailField} required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control border-0 p-4"  placeholder="Your Name" ref={userNameField} required="required" data-validation-required-message="Please enter your account name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="number" class="form-control border-0 p-4" id="email" placeholder="Your Contact" ref={userContactField} required="required" data-validation-required-message="Please enter your account name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="password" class="form-control border-0 p-4" id="password" placeholder="Your Password" ref={userPasswordField} required="required" data-validation-required-message="Please enter strong password" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <label className='mr-5'>Gender </label>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" value="Male" onChange={() => setGender("Male")} id="color-4" name="color" />
                                    <label class="custom-control-label" for="color-4">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" value="Female" onChange={() => setGender("Female")} id="color-5" name="color" />
                                    <label class="custom-control-label" for="color-5">Female</label>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Sign Up</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}