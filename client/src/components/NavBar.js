import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({auth: {user, handleLogout, }, history}) => {
    return (
        <>
            <Navigation>
                {user ? 
                    <button onClick={() => handleLogout(history)}>Logout</button>         
                :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                }
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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;