import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTh,faUser,faPuzzlePiece,faQuestionCircle,faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';


const Profiles = () => {
    const iconStyle = { color: 'blue' };
  return (
    <div className="outer-most-container">
  <>
  <a
    href="#"
    className="btn btn-light" 
    role="button"
    aria-pressed="true"
  >
    xyz Enterprises pvt.Ltd
  </a>

  <a
    href="#"
    className="btn btn-light" 
    role="button"
    aria-pressed="true"
  >
    ^
  </a>
</>

       
        <div className="overall-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3" >
                {/* User Information Section */}
                <div className="card-box text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="rounded-circle avatar-xl img-thumbnail"
                    alt="profile-image"
                  />
                  <h4 className="mb-0">Ram Mohan</h4>
                  <p className="text-muted">rammohan@gmail.com</p>

                  <div className="btn-group d-flex flex-column">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-xs waves-effect mb-2 waves-light"
                  >
                    <FontAwesomeIcon icon={ faTh} className="icon-blue" /> Dashboard
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faUser} style={iconStyle}   /> Perks
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faPuzzlePiece} style={iconStyle} /> Addons
                  </button>
                  
                  <button
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} style={iconStyle}  /> FAQ
                  </button>
                    <button
  type="button"
  className="btn btn-light"
>
  <FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> Support
</button>

<button
                    type="button"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleUp} style={iconStyle} /> Logout
                  </button>
                  </div>
                </div>{" "}
                {/* end card-box */}
              </div>{" "}
              {/* end col */}

              <div className="col-md-8 col-lg-9">
                {/* Plan Selection Section */}
                <div className="card-box">
                  <b>
                    <h3>Choose a plan that's just right for you!</h3>
                  </b>

                  <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4">

                      <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">
                          <h3>Basic</h3>
                         <p style={{ textDecoration: 'line-through' }}>$89.99/mo</p>
                         <p>$199.99/mo</p>
                          <button
    style={{ backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}
    onClick={() => alert('Button 1 clicked')}
  >
    Get Started
  </button>
                          
                        </div>

                        <div className="card-body text-dark">
                          <h5 className="card-title">what will get</h5>
                          <p className="card-text">
                          <h9> upto 25 User</h9>
                          <p><h9> upto 25gb storage</h9></p>
                          <p><h9>email support</h9></p></p>
                       
                   <p><u>EXPLORE FEATURES</u></p>   
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">

                      <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">
                          <h3>standard</h3>
                          <p style={{ textDecoration: 'line-through' }}>$189.99/mo</p>

                          <p>$199.99/mo</p>
                          <button
    style={{ backgroundColor: 'red', color: 'black', fontWeight: 'bold' }}
    onClick={() => alert('Button 1 clicked')}
  >
    Get Started
  </button>                        </div>

                        <div className="card-body text-dark">
                          <h5 className="card-title">what will get</h5>
                          <p className="card-text">
                          <h8> upto 50 User</h8>
                          <p><h8> upto 60gb storage</h8></p>
                          <p><h8> email chat support</h8></p>
                          </p>
                          <p><u>EXPLORE FEATURES</u></p>
                        </div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4">
                      <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">
                          <h3>Premium</h3>
                          <p style={{ textDecoration: 'line-through' }}>$389.99/mo</p>

                          <p>$199.99/mo</p>
                          <button
    style={{ backgroundColor: 'violet', color: 'black', fontWeight: 'bold' }}
    onClick={() => alert('Button 1 clicked')}
  >
    Get Started
  </button>                        </div>

                        <div className="card-body text-dark">
                          <h5 className="card-title">what will get</h5>
                          <p className="card-text">
                          <h8> upto 75 User</h8>
                          <p><h8> upto 100gb storage</h8></p>
                          <p><h8> email+chat support</h8></p>
                          </p>
                          <p><u>EXPLORE FEATURES</u></p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: 400 }}>
  <div className="row no-gutters">
    <div className="col-md-4">
    
   <h4><b>Free Starter</b></h4>
   <p>The quickest and easiest way to try protocols
    with basic functionalities.
   </p>
   <button
    style={{ backgroundColor: 'green', color: 'black', fontWeight: 'bold' }}
    onClick={() => alert('Button 1 clicked')}
  >
    Get Started
  </button>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">What you will get:</h5>
        <p className="card-text">
          upto 8 users
        </p>
        upto 3gb storage
        <p>Email support</p>
        <p>Basics of Documents,Task flow,
          voting,Accounting,Banking,Notes,
          investor,Director and Team 
          management included.</p>
        
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 400 }}>
  <div className="row no-gutters">
    <div className="col-md-4">
   <h5><b>Enterprise plan</b></h5>
   <p>Effortlessly customise and fine-tune services as your
    need shift,ensuring the perfect tool.
   </p>
   <button
    style={{ backgroundColor:'blue', color: 'black', fontWeight: 'bold' }}
    onClick={() => alert('Button 1 clicked')}
  >
   contact us
  </button>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">What you will get:</h5>
        <p className="card-text">
          more than 75 user
        </p>
        customization of all
        other features
        
      </div>
    </div>
  </div>
</div>
                  
                   
                  </div>
                </div>{" "}
                {/* end card-box*/}
              </div>{" "}
              {/* end col */}
              
            </div>
           
            <h9 style={{ color: 'blue' }}>
            *some unique feature are provided as add-ons with individual plans for each features</h9>
          </div>
          
        </div>
      {/* </div> */}
    </div>
  );
};

export default Profiles;

