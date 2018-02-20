import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
                
                    <form onSubmit={this.handleSubmit} className="form">
                        <input type="text" id="name" placeholder="First and Last Name" required/><br/>
                        <input type="email" id="email" placeholder="Email" required/><br/>
                        <input type="password" id="password" placeholder="Password" className="ok" required/><br/>
                        <input type="password" id="confirm-password" placeholder="Confirm Password" required/><br/>
                        <input type="submit" id="submit" value="Create an Acount" />
                    </form>
            
        );
    }
}

export default Signup;