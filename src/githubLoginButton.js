import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { MDBContainer, MDBCardHeader, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import  { Redirect } from 'react-router-dom'

const CLIENT_ID = "7ae89ce23a312c83e111";
const REDIRECT_URI = "http://localhost:3000/";

class GithubLoginButton extends React.Component{

      handleClick = () => {
            Re
      }
	render(){
		return(
			<MDBBtn
            	type="button"
            	color="white"
            	rounded
            	className="mr-md-4 z-depth-1a"
                  onClick = {this.handleClick}>
            	<MDBIcon fab icon="github" className="blue-text text-center" />
            </MDBBtn>
		);
	}
}

export default GithubLoginButton;