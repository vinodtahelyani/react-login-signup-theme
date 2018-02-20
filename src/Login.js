import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);        
    }
    submit(){
        var data = {
            email:this.state.email,
            password:this.state.password
        };

        fetch('https://nodejstodoapi.herokuapp.com/user/signin', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
                
    }).catch(err => console.log(err)
    
    );
    }
    changeEmail(e){
        this.setState({email:e.target.value});
    }
    changePassword(e){
        this.setState({password:e.target.value});
    }
    
    render() {
        return (
            
                    <form  className="form"   onSubmit={this.submit}>
                        <input type="email" id="email" placeholder="Email" onChange={this.changeEmail} required="required"/><br/>
                        <input type="password" id="password" placeholder="Password" onChange={this.changePassword} required="required" /><br/>
                        <input type="submit" id="submit" value="Login" reqiured/>
                    </form>     
        );
    }
}

export default Login;