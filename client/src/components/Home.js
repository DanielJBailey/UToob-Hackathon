import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getVideos } from "../reducers/videos";
// import Iframe from "react-iframe";
import YouTube from "react-youtube";

class Home extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getVideos());
    this.setState({
      loaded: true
    });
  }

  render() {
    let { videos } = this.props;
    let firstVideo;
    let sideBarVids;
    let remainingVids;
    for (var i = 0; i < videos.length; i++) {
      videos[i].url = videos[i].url.replace(
        "https://www.youtube.com/watch?v=",
        ""
      );
    }
    if (videos.length > 0) {
      firstVideo = {
        url: videos[0].url,
        title: videos[0].title,
        description: videos[0].description,
        genre: videos[0].description,
        duration: videos[0].description
      };
      sideBarVids = videos.slice(1, 4);
      remainingVids = videos.slice(4, videos.length);
    }

    return (
      <HomeContainer>
        <h1>All Videos</h1>
        <HighlightContainer>
          {videos.length > 0 ? (
            <>
              <FirstVideo>
                <YouTube videoId={firstVideo.url} className="first-video" />
                <h3 className="video-title">{firstVideo.title}</h3>
              </FirstVideo>
              <SideBarVids>
                {sideBarVids.map(video => (
                  <Video key={video.id}>
                    <YouTube videoId={video.url} className="video" />
                    <p>{video.title}</p>
                  </Video>
                ))}
              </SideBarVids>
            </>
          ) : null}
        </HighlightContainer>
        <MainBody>
          {videos.length > 4 ? (
            <>
              {remainingVids.map(video => (
                <BodyVideo key={video.id}>
                  <YouTube videoId={video.url} className="video" />
                  <p>{video.title}</p>
                </BodyVideo>
              ))}
            </>
          ) : null}
        </MainBody>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 100px);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 150px;

  h1 {
    font-size: 25px;
    font-weight: lighter;
    padding-bottom: 50px;
  }
`;

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 0;
`;

const BodyVideo = styled.div`
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
  .video {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
`;


const HighlightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const FirstVideo = styled.div`
  flex: 1;
  padding: 0 10px;
  .video-title {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 10px;
    font-weight: lighter;
  }
  .first-video {
    width: 600px;
  }
`;

const SideBarVids = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
`;



const Video = styled.div`
  .video {
    width: 100%;
    height: 100%;
    max-height: 150px;
  }

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
`;



const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(mapStateToProps)(Home);
