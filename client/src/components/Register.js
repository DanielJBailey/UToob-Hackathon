import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import styled from 'styled-components';

class Register extends React.Component {
    state = {email: '', password: '', passwordConfirmation: '', nickname: ''}

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password, passwordConfirmation, nickname } = this.state;
        const {auth: {handleRegister, }, history} = this.props;
        if(password === passwordConfirmation) {
            handleRegister({email, password, passwordConfirmation, nickname}, history);
        } else {
            alert('Passwords Do Not Match!');
        }
    }

    render() {
        const {email, password, passwordConfirmation, nickname} = this.state;
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type = "nickname"
                        required
                        placeholder = "Username"
                        autoComplete = "nickname"
                        name="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                    />
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
                        type = "password"
                        required
                        placeholder = "Password Confirmation"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                </Form>
            </Container>
        )
    }
}

export default class ConnectedRegister extends React.Component {
    render() {
        return(
            <AuthConsumer>
                {auth => <Register {...this.props} auth={auth}/>}
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
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;