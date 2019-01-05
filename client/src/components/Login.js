import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
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
            </Form>
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


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;