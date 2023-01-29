import WebService from "../WebWork/WebService"
import WebApi from "../WebWork/WebApi"
import { ToastContainer, toast } from "react-toastify"
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function AddFlat() {
    const { user } = useSelector(state => state.user.value);
    console.log("In Add Flat");
    console.log(user);
    let locationField = useRef();
    let lookingForField = useRef();
    let flatRentField = useRef();
    let OccupancyField = useRef();
    let AvailableDateField = useRef();
    let flatDescriptionField = useRef();
    let flatAreaZipCodeField = useRef();
    const [flatAmenities,setAmenities] =  useState([]);
    const [flatImages, setflatImage] = useState([]);

    const save = async (e) => {
        let validation = validateImageSize();
        if(validation){
        console.log(flatAmenities);
        let formData = new FormData();

        formData.set("userId", user._id);
        for (let i = 0; i < flatImages.length; i++) {
            formData.append("flatImages", flatImages[i]);
        }
        formData.set("flatLocation", locationField.current.value);
        formData.set("lookingFor", lookingForField.current.value);
        formData.set("Rent", flatRentField.current.value);
        formData.set("Occupancy", OccupancyField.current.value);
        formData.set("AreaZipCode", flatAreaZipCodeField.current.value);
        formData.set("flatDescription", flatDescriptionField.current.value);
        formData.set("AvailableDate", AvailableDateField.current.value);
        for(let i =0;i<flatAmenities.length;i++){
            formData.append("flatAmenities",flatAmenities);
        }
        console.log("Flat Amenities");
        console.log(flatAmenities);
        formData.set("flatAmenities",flatAmenities);
        try {
            let res = await WebService.postApi(WebApi.ADD_FLAT, formData);
            if (res.data.status) {
                toast.success("Flat Added Successfully");
            }
        } catch (error) {
            toast.error("Internal Server Error");
        }}
        else{
            toast.error("Invalid Image Size ");
        }
    }
    const getAmenities = (e)=>{
        const {value,checked} =  e.target
        if(checked){
            setAmenities([...flatAmenities,value]);
        }
        else{
            setAmenities(flatAmenities.filter((e)=> e!==value))
        }
    }

    const onFileChange = (e) => {
        setflatImage(e.target.files)
    }
      const validateImageSize = ()=>{
        if(flatImages.length!=4){
            toast.error("Please Pick 4 Photographs");
        }
        else{
            let MAX_LENGTH  = 1024*0.1; // 250000
            console.log(MAX_LENGTH); // 250000
            let FILE_LENGTH=0;
            for(let i  = 0;i<flatImages.length;i++){
                console.log(flatImages[i].size);
                FILE_LENGTH+=flatImages[i].size/1024; //300000 bytes 
            }
            console.log(FILE_LENGTH);
            if(FILE_LENGTH>MAX_LENGTH){
                toast.error("File Size is more than 25 mb");
            }
            else{
                toast.success("Accepted");
                return true
            }
        }
        return false;
      }

    return <>
        <ToastContainer />
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-8">
                    <div class="mb-4">
                        <h4 class="font-weight-semi-bold mb-4 text-center">Add Your Flat</h4>
                        <h4 class="font-weight-semi-bold mb-4">Your Personal Details</h4>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Your Name</label>
                                <input class="form-control" defaultValue={user.userName} type="text" placeholder="John Sharma" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>E-mail</label>
                                <input class="form-control" defaultValue={user.userEmail} type="text" placeholder="example@email.com" />
                            </div>
                            <div class="col-md-12 form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="shipto" />
                                    <label class="custom-control-label" for="shipto" data-toggle="collapse" data-target="#shipping-address">Add Flat Details</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse mb-4" id="shipping-address">
                        <h4 class="font-weight-semi-bold mb-4">Flat Details</h4>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Add Your Location*</label>
                                <input class="form-control" type="text" ref={locationField} placeholder="Rajwada" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Looking For*</label>
                                <select class="custom-select" ref={lookingForField}>
                                    <option selected value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Any">Any</option>
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Approx Rent*</label>
                                <input class="form-control" type="number" ref={flatRentField} placeholder="Rs 5000* " />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Occupancy*</label>
                                <select class="custom-select" ref={OccupancyField}>
                                    <option selected value="Single">Single</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Any">Any</option>
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Contact Number*</label>
                                <input class="form-control" defaultValue={user.userContact} type="text" placeholder="+123 456 789" />
                                <p style={{ fontSize: 12 }}> Show - User can call you and/or chat with you.<br />Hide - Users can only chat with you.</p>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Available From*</label>
                                <input class="form-control" ref={AvailableDateField} type="Date" placeholder="123 Street" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Upload 4 Photos of your flat</label>
                                <input class="form-control" type="File" multiple onChange={onFileChange} placeholder="New York" />
                                <p style={{ fontSize: 12 }}>You can upload images upto <strong>25 MB</strong></p>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Area ZIP Code*</label>
                                <input class="form-control" type="text" ref={flatAreaZipCodeField} placeholder="406856" />
                            </div>
                            <div class="col-md-6 form-group" >
                                <label>Flat Description*</label>
                                <textarea rows={4} ref={flatDescriptionField} class="form-control" type="text" placeholder="Give Flat Details" style={{ backgroundColor: '#f5f5f5' }} />
                            </div>
                            <h5 class="font-weight-semi-bold mb-4">Flate Amenities<br/></h5>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}> Tv</label>
                                <input value="Tv" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Fridge</label>
                                <input value="Fridge" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Kitchen</label>
                                <input value="Kitchen" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Wifi</label>
                                <input value="Wifi" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Machine</label>
                                <input  value="Machine" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Ac</label>
                                <input value="AC" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>24/7 Water</label>
                                <input value="24/7 Water" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Parking</label>
                                <input value="Parking" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Cook</label>
                                <input value="Cook" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                            <div class="col-md-2 form-group">
                                <label style={{fontSize:20}}>Vehical</label>
                                <input value="Vehical" onChange={(e)=>getAmenities(e)} type="checkbox"></input>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mb-2">
                            <button type="button" class="btn btn-outline-primary ms-1" onClick={save} >Add Your Flat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}