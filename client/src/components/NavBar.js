import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import MainLogo from '../assets/main_logo.png';
import UserLogo from '../assets/user_logo.png';

const NavBar = ({auth: {user, handleLogout, }, history}) => {
    return (
        <>
            <Navigation>
                <Container>
                    <LogoContainer>
                        <Link to ="/"><img src = {MainLogo} alt="site-logo" /></Link>
                    </LogoContainer>
                    <RightItems>
                        {user ? 
                            <button onClick={() => handleLogout(history)}>Logout</button>         
                        :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        }
                    </RightItems>
                </Container>
               
            </Navigation>
            
        </>
        
    )
}

export class ConnectedNavBar extends React.Component {
    render() {
        return(
            <AuthConsumer>
                {auth => <NavBar {...this.props} auth={auth} />}
            </AuthConsumer>
        )
    }
}

export default withRouter(ConnectedNavBar);

const Navigation = styled.div`
    width: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    img {
        max-width: 150px;
    }
`;

const RightItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;