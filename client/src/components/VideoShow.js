import React from "react";
import YouTube from "react-youtube";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";
import logo from "../assets/user_logo.png";

class VideoShow extends React.Component {
  state = {
    id: "",
    url: "",
    title: "",
    description: "",
    genre: "",
    duration: "",
    loaded: false
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axios.get(`/api/videos/${id}`).then(res => {
      this.setState(res.data);
    });
  }

  render() {
    let {
      id,
      url,
      title,
      description,
      genre,
      duration,
      created_at
    } = this.state;
    url = url.replace("https://www.youtube.com/watch?v=", "");
    return (
      <MainWrapper>
        <VideoContainer>
          {id !== "" ? (
            <Video>
              <YouTube videoId={url} className="main-video" />
            </Video>
          ) : null}
        </VideoContainer>
        <BodyContainer>
          <AuthorInfo>
            <h2>{title}</h2>
            <p className="date">
              {moment(created_at)
                .startOf("hour")
                .fromNow()}
            </p>
            <hr />
            <UserInfo>
              <img src={logo} alt="" className="logo" />
            </UserInfo>
          </AuthorInfo>
        </BodyContainer>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const AuthorInfo = styled.div`
  margin: 25px 0;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h2 {
    padding: 50px 50px 10px;
    font-size: 20px;
    color: #2e3542;
  }

  .date {
    padding: 0 0 0 50px;
  }

  hr {
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #ccc;
    height: 1px;
    border: none;
    display: block;
  }
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin: 0 auto;
  background-color: grey;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  @media(max-width: 425px) {
    min-height: 300px;
    width: 100%;
  }
`;
const Video = styled.div`
  width: 100vw;
  height: 600px;

  .main-video {
    width: 100%;
    height: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 50px 50px;
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default VideoShow;
