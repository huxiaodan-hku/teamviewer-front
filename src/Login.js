import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { MDBContainer, MDBCardHeader, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import GithubLoginButton from './githubLoginButton.js';
import WechatLoginButton from './wechatLoginButton.js';

class Login extends React.Component{
	render(){
		return(
			<MDBContainer className ="mt-3">
              <MDBRow>
                <MDBCol md="6" className="offset-md-3">
                  <MDBCard>
                    <MDBCardBody className="mx-4">
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                          <strong>Sign in</strong>
                        </h3>
                      </div>
                      <Username></Username>
                      <Password></Password>
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot
                        <a href="#!" className="blue-text ml-1">

                          Password?
                        </a>
                      </p>
                      <div className="text-center mb-3">
                        <MDBBtn
                          type="button"
                          gradient="blue"
                          rounded
                          className="btn-block z-depth-1a"
                        >
                          Sign in
                        </MDBBtn>
                      </div>
                      <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                        or Sign in with:
                      </p>
                      <div className="row d-flex justify-content-center">
                        
                        <GithubLoginButton></GithubLoginButton>
                        <WechatLoginButton></WechatLoginButton>
                        <MDBBtn
                          type="button"
                          color="white"
                          rounded
                          className="z-depth-1a"
                        >
                          <MDBIcon fab icon="google-plus-g" className="blue-text" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                      <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <a href="#!" className="blue-text ml-1">

                          Sign Up
                        </a>
                      </p>
                    </MDBModalFooter>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        );
		
	}
}

class Username extends React.Component{
	render(){
		return(
			<MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
            />
		);
	}
}

class Password extends React.Component{
	render(){
		return(
			<MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
            />
		);
	}
}

export default Login;