export default function Plans() {
    return <>
      <div className="container" style={{padding:"40px"  }}>
        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up" style={{marginLeft:"150px"}}>
            <div className="row" style={{width:"130%"}}>
              <div className="col-lg-3 col-md-6 m-5 p-4"  style={{boxShadow:"3px 3px 10px orange", borderRadius:"15px"}}>
                <div className="box">
                  <div className="p-1" style={{ backgroundColor: "#f58438"}}> <h1><center><font style={{color:"white"}}>DIY Plan</font></center></h1>
                    <h4><center><sup>$</sup>0<span> / month</span></center></h4></div>
                  <ul className="ml-4 p-3">
                    <li><font style={{fontSize:"20px"}}>Unlimited access to each post access</font></li>
                    <li><font style={{fontSize:"20px"}}>Unlimited access to contacts and chats</font></li>
                    <li><font style={{fontSize:"20px"}}>Personal relationship manager</font></li>
                  </ul>
                  <div className="btn-wrap">
                   <center> <button href="#" className="btn btn-outline-primary">Buy Now</button></center>
                  </div>
                </div>
              </div>
  
  
              <div className="col-lg-3 col-md-6 m-5 p-4"  style={{boxShadow:"3px 3px 10px orange",borderRadius:"15px"}} >
                <div className="box featured" >
                  <div className="p-1" style={{ backgroundColor: "#f58438" }}><h1><center><font style={{color:"white"}}>Relax Plan</font></center></h1>
                    <h4><center><sup>$</sup>19<span> / month</span></center></h4></div>
                  <ul className="ml-4 p-3">
                    <li><font style={{fontSize:"20px"}}>Unlimited access to each post access</font></li>
                    <li><font style={{fontSize:"20px"}}>Unlimited access to contacts and chats</font></li>
                    <li><font style={{fontSize:"20px"}}>Personal relationship manager</font></li>
                  </ul>
                  <div className="btn-wrap">
                  <center>  <button href="#" className="btn btn-outline-primary">Buy Now</button></center>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
        </section>
      </div>
    </>
  }