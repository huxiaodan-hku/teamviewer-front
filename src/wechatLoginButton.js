import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { MDBContainer, MDBCardHeader, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


class WechatLoginButton extends React.Component{
	render(){
		return(
			<MDBBtn
                          type="button"
                          color="white"
                          rounded
                          className="mr-md-4 z-depth-1a"
                        >
                          <MDBIcon icon="comments" className="blue-text" />
                  </MDBBtn>
		);
	}
}

export default WechatLoginButton;