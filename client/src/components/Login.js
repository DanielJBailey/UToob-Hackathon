import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import {Link,} from 'react-router-dom';
import styled from 'styled-components';

class Login extends React.Component {
    state = {email: '', password: ''}

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        this.props.auth.handleLogin({email, password}, this.props.history);
    }

    render() {
        const {email, password} = this.state;
        return(
            <Container>
                <h1 className ="signIn">Sign In</h1>
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type = "email"
                        required
                        placeholder = "Email"
                        autoComplete = "email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type = "password"
                        required
                        placeholder = "Password"
                        autoComplete = "password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                    <Link to ="/NoMatch"><h1 className="forgotPassword">Forgot Password?</h1></Link>
                </Form>
            </Container>
        )
    }
}

export default class ConnectedLogin extends React.Component {
    render() {
        return(
            <AuthConsumer>
                {auth => <Login {...this.props} auth={auth}/>}
            </AuthConsumer>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 250px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    .forgotPassword {
        font-size: 10px;

    }
`;