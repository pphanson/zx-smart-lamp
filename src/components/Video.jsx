import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import VideoJS from 'video.js/dist/video.es';
import flash from 'videojs-flash/dist/videojs-flash.es';
import 'video.js/dist/video-js.css';

class Video extends React.Component {
  constructor() {
    super();
    this.video = null;
    this.setVideoRef = this.setVideoRef.bind(this);
  }

  setVideoRef(element) {
    this.video = element;
  }

  componentDidMount() {
    const videoDom = ReactDOM.findDOMNode(this.video);
    const videoPlayer = VideoJS(
      videoDom,
      {
        sources: [
          {
            src: this.props.src,
            type: 'rtmp/mp4',
          },
        ],
        techOrder: ['flash', 'html5'],
        width: 400,
        height: 300,
        autoplay: true,
        crossorigin: true,
      },
      function () {
        this.play();
      },
    );
  }

  render() {
    return (
      <div>
        <video className="video-js vjs-default-skin vjs-big-play-centered" ref={this.setVideoRef} />
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

Video.defaultProps = {
  src: 'rtmp://117.78.28.237:1935/hls/live',
  type: 'video/flash',
};

export default Video;
