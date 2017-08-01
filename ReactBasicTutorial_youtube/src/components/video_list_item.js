import React from 'react';

//obj passed has a property called video. grab it and make a var called video
//is same as const video = props.video
const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading"> {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
