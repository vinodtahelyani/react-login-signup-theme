import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false,
      signup:true
    }
    this.switchToLogin = this.switchToLogin.bind(this);
    this.switchToSignup = this.switchToSignup.bind(this);
    
  }
  switchToLogin(){
      this.setState({login:true,signup:false});
  }
  switchToSignup(){
    
      this.setState({login:false,signup:true});
    
  }
  render() {
    return (
      <div className="App">
      <div className="bg">
        <div className="state">
        <button onClick={this.switchToLogin}  className={(this.state.login===true?"present":"login absent")}>Log In</button>
        <button onClick={this.switchToSignup} className={this.state.signup===true?"present":" signup absent"}>Sign Up</button>      
        </div>
        {this.state.signup===true ? <Signup /> : <Login />}
        <hr/><div className="or">Or connect with:</div>
        <div className="social" >
        <button   className="google">google</button>
        <button   className="facebook">facebook</button>        
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
