import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
    super(props)
    this.state = {email: "", password: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event) {
       this.setState({ [event.target.name] : event.target.value })
   }
   handleSubmit(event) {
       event.preventDefault();
       axios 
        .post("http://157.230.232.55/auth/local",{identifier:this.state.email, password:this.state.password})
        .then(response=> localStorage.setItem("token",response.data.jwt))
        .then(this.props.history.push("/"))
   }
   
    render() { 
        return <div className="container m-5">
            <h1>{this.state.email}</h1>
            <main className='row justify-content-center align-self-center form-signin'>
                <form style={{ width: 330, height: 300 }}>
                    <label 
                        htmlFor="intputemail" 
                        className="visually-hidden">
                        Email address
                    </label>
                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="email" 
                        className="form-control m-2" 
                        value={this.state.email} 
                    />  
                    <label 
                        htmlFor="inputpassword" 
                        className="visually-hidden">
                        Password
                    </label>
                    <input 
                        onChange={this.handleChange} 
                        type="text" name="password" 
                        className="form-control m-2" 
                        value={this.state.password} /> 
                    <button
                        onClick={this.handleSubmit}
                        type="submit" 
                        className="m-4 w=100 btn btn-lg btn-danger m-2type">
                        Submit
                    </button>
                </form>
                </main>
            </div>  
 
    }
}
 
export default Login;
//Line 22 and 26 (onChange lines if they change) Name and value fields MUST match what is set in state.