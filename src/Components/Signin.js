import {Component} from "react";

class Signin extends Component{
    constructor(props){
        super()
     this.state = {
            email: '',
            password: ''
        }
    }


    
    onEmailChange = (event) => {
        // console.log(event.target.value)
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        // console.log(event.target.value)
        this.setState({password: event.target.value})
    }
    
    onSubmit = () => {

        fetch('http://localhost:3002/signin' , {

            //It will describe what the request will be
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    email: this.state.email,
                    password: this.state.password
                }
            )

            //We cant send javaScript object to the backend so we need to parse our response to JSON using JSON.stringify and at the backend we have already used a middleware which will parse the json to javaScript object for us\
            
            //Fetch Api is Asynchronous -> make notes about fetch API also
        }).then(res => res.json()).then(user => {
            if(user){
                this.props.onRouteChange('home')
                this.props.loadUser(user)
            
            }
        }).catch(err => console.log(err))
     


    }


    render(){

        const {onRouteChange} = this.props;

        return (
            <div className=" dark-grey ba  w-80-m w-45-l mw6 br4 shadow-3 center mt5">
                <main className="pa4 black-80">
                    <div style={{flexDirection: 'column'}} className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                            onClick={()=> onRouteChange('Register')} 
                            href="#0" className="f6 pointer link dim black db">Register</p>
                        </div>
                    </div>
                </main>
    
            </div>
        )
    }
    

}

export default Signin;