import { useRef } from 'react';
import WebService from '../WebWork/WebService';
import WebApi from '../WebWork/WebApi';
import { ToastContainer, toast } from "react-toastify";
import { setCurrentUser } from '../Services/user.slice';
import { useDispatch,useSelector} from "react-redux";

export default function SignIn() {
    let userPasswordField = useRef();
    let userEmailField = useRef();
    let dispatch = useDispatch();
    let {user} = useSelector(state=>state.user.value);
    console.log(user);
    const signin = async (event)=>{
        event.preventDefault();
        try{
         let response = await WebService.postApi(WebApi.USER_SIGNIN,{userEmail:userEmailField.current.value,userPassword:userPasswordField.current.value});
         if(response.status){
            dispatch(setCurrentUser(response.data.result));
            toast.success("Sign In Successfully");
         }  
        }
        catch(error){
            toast.error("Invalid email or password");
        }  
       }
    return <>
    <ToastContainer/>
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Sign In Here</h5>
                    <h1>Enter Your Details</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form bg-secondary rounded p-5">
                            <div id="success"></div>
                            <form onSubmit={(e)=>{signin(e)}}>
                                <div class="control-group">
                                    <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email" ref={userEmailField} required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="password" class="form-control border-0 p-4" id="password" placeholder="Your Password" ref={userPasswordField} required="required" data-validation-required-message="Please enter strong password" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Sign In</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}