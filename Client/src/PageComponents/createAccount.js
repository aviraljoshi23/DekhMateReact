import { useRef } from 'react';
import WebService from '../WebWork/WebService';
import WebApi from '../WebWork/WebApi';

export default function CreateAccount() {

    let userNameField = useRef();
    let userContactField = useRef();
    let userPasswordField = useRef();
    let userEmailField = useRef();
    let userGenderField = useRef();

    const NewAccount = async(e)=> {
        e.preventDefault();
        let obj = {
            userName: userNameField.current.value,
            userEmail: userEmailField.current.value,
            userPassword: userPasswordField.current.value,
            userContact: userContactField.current.value,
            userGender: userGenderField.current.value,
    
        }
        console.log("Data Display");
        console.log(obj);
        WebService.postApi(WebApi.CREATE_ACCOUNT,{obj})
    }
    return <>
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Create Account</h5>
                    <h1>Get Your Perfect Roomi</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form bg-secondary rounded p-5">
                            <div id="success"></div>
                            <form onSubmit={(e)=>{NewAccount(e)}}>
                                <div class="control-group">
                                    <input type="text" class="form-control border-0 p-4" id="name" placeholder="Your Name" ref={userNameField} required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email" ref={userEmailField} required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="password" class="form-control border-0 p-4" id="password" placeholder="Your Password" ref={userPasswordField} required="required" data-validation-required-message="Please enter strong password" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="number" class="form-control border-0 p-4" id="contact" placeholder="Your Contact" ref={userContactField} required="required" data-validation-required-message="Please enter a contact" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <label className='mr-5 text-dark text-primary '>Select Gender</label>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" id="size-2" ref={userGenderField} value="Male" name="size" />
                                    <label class="custom-control-label" for="size-2">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" id="size-3" ref={userGenderField} value="Female" name="size" />
                                    <label class="custom-control-label" for="size-3">Female</label>
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