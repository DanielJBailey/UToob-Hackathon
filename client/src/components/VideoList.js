import React from 'react';
import { connect, } from 'react-redux';

const VideoList = ({ videos }) => (
  <ul>
  { videos.map( v => {
    return (
      <li key={v.id}>
       { v.title }
      </li>
    )
   })
  }
</ul>
)

const mapStateToProps = (state) => {
  return { videos: state.videos, };
}

export default connect(mapStateToProps)(VideoList);