import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NoMatch = () => (
    <ErrorContainer>
        <h1>Error 404 Not Found</h1>
        <Link to="/">Home</Link>
    </ErrorContainer>
)

export default NoMatch;

const ErrorContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

