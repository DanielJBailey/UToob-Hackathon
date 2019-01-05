import React from 'react';
import styled from 'styled-components';

const Home = () => (
    <HomeContainer>
        <h1>Home</h1>
    </HomeContainer>  
)

export default Home;

const HomeContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;