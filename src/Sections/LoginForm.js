import React from 'react';

import './Login.css';
import { TopBuffer } from '../helpers/utilities';
import Logo from '../assets/logo.png';
import LoadingScreen from '../Components/LoadingScreen'
import { TextInput } from '../Components/TextInput';




class LoginForm extends React.Component{
  state = {
    username: '',
    password: '',
    error: '',
    submitButton: 'Login',
    isLoading: false
  };
  onUsernameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  verifyLogin = (e) => {
    e.preventDefault();
    this.setState(() => ({
      submitButton: 'Loading...',
      isLoading: true
    }));
    if(!this.state.username || !this.state.password){
      this.setState(() => ({
        error: 'กรุณากรอก username และ password!',
        submitButton: 'Login',
        isLoading: false
      }));
    }else{

    }
  };

  render(){
    return(
      <div className="mx-auto mainStyle">
        <div className="container">
        { this.state.isLoading && <LoadingScreen /> }
          <div className="col-8 mx-auto">
            <TopBuffer />
            <div className="row justify-content-center"><img alt="Jep's Logo" src={Logo}/></div>
            <TopBuffer />
            {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
            <form onSubmit={this.verifyLogin}>
              <TextInput value={this.state.username} onChange={this.onUsernameChange} label='Username' type="text" />
              <TopBuffer />
              <TextInput value={this.state.password} onChange={this.onPasswordChange} label='Password' type="password" />
              <TopBuffer />
              <div className="row justify-content-center">
                  <button type="submit" className="btn btn-primary" onClick={this.verifyLogin}>{this.state.submitButton}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default LoginForm;
