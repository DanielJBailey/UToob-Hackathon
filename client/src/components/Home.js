import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getVideos} from '../reducers/videos';

class Home extends React.Component {
    state = {
        videos: []
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getVideos());
    }

    render() {
        return(
            <HomeContainer>
                <h1>Home</h1>
            </HomeContainer>
        )
    }
}

const HomeContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const mapStateToProps = (state) => {
    return { videos: state.videos, };
}

export default connect(mapStateToProps)(Home);

