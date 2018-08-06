import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoPlayer from 'react-flow-player';
import { Col, Row, Button, Icon } from 'antd';
import { videoActions } from 'actions';

import './Video.scss';

const ButtonGroup = Button.Group;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  startTiltUp: () =>
    dispatch(
      videoActions.controlAction({
        command: 21,
        stop: 0,
      }),
    ),
  stopTiltUp: () =>
    dispatch(
      videoActions.controlAction({
        command: 21,
        stop: 1,
      }),
    ),
  startTiltDown: () =>
    dispatch(
      videoActions.controlAction({
        command: 22,
        stop: 0,
      }),
    ),
  stopTiltDown: () =>
    dispatch(
      videoActions.controlAction({
        command: 22,
        stop: 1,
      }),
    ),
  startPanLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 23,
        stop: 0,
      }),
    ),
  stopPanLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 23,
        stop: 1,
      }),
    ),
  startPanRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 24,
        stop: 0,
      }),
    ),
  stopPanRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 24,
        stop: 1,
      }),
    ),
  startUpLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 25,
        stop: 0,
      }),
    ),
  stopUpLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 25,
        stop: 1,
      }),
    ),
  startUpRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 26,
        stop: 0,
      }),
    ),
  stopUpRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 26,
        stop: 1,
      }),
    ),
  startDownLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 27,
        stop: 0,
      }),
    ),
  stopDownLeft: () =>
    dispatch(
      videoActions.controlAction({
        command: 27,
        stop: 1,
      }),
    ),
  startDownRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 28,
        stop: 0,
      }),
    ),
  stopDownRight: () =>
    dispatch(
      videoActions.controlAction({
        command: 28,
        stop: 1,
      }),
    ),
  startPanAuto: () =>
    dispatch(
      videoActions.controlAction({
        command: 29,
        stop: 0,
      }),
    ),
  stopPanAuto: () =>
    dispatch(
      videoActions.controlAction({
        command: 29,
        stop: 1,
      }),
    ),
  startZoomIn: () =>
    dispatch(
      videoActions.controlAction({
        command: 11,
        stop: 0,
      }),
    ),
  stopZoomIn: () =>
    dispatch(
      videoActions.controlAction({
        command: 11,
        stop: 1,
      }),
    ),
  startZoomOut: () =>
    dispatch(
      videoActions.controlAction({
        command: 12,
        stop: 0,
      }),
    ),
  stopZoomOut: () =>
    dispatch(
      videoActions.controlAction({
        command: 12,
        stop: 1,
      }),
    ),
  startFocusNear: () =>
    dispatch(
      videoActions.controlAction({
        command: 13,
        stop: 0,
      }),
    ),
  stopFocusNear: () =>
    dispatch(
      videoActions.controlAction({
        command: 13,
        stop: 1,
      }),
    ),
  startFocusFar: () =>
    dispatch(
      videoActions.controlAction({
        command: 14,
        stop: 0,
      }),
    ),
  stopFocusFar: () =>
    dispatch(
      videoActions.controlAction({
        command: 14,
        stop: 1,
      }),
    ),
  startIrisOpen: () =>
    dispatch(
      videoActions.controlAction({
        command: 15,
        stop: 0,
      }),
    ),
  stopIrisOpen: () =>
    dispatch(
      videoActions.controlAction({
        command: 15,
        stop: 1,
      }),
    ),
  startIrisClose: () =>
    dispatch(
      videoActions.controlAction({
        command: 16,
        stop: 0,
      }),
    ),
  stopIrisClose: () =>
    dispatch(
      videoActions.controlAction({
        command: 16,
        stop: 1,
      }),
    ),
});

const Video = ({
  startTiltUp,
  stopTiltUp,
  startTiltDown,
  stopTiltDown,
  startPanLeft,
  stopPanLeft,
  startPanRight,
  stopPanRight,
  startUpLeft,
  stopUpLeft,
  startUpRight,
  stopUpRight,
  startDownRight,
  stopDownRight,
  startDownLeft,
  stopDownLeft,
  startPanAuto,
  stopPanAuto,
  startZoomIn,
  stopZoomIn,
  startZoomOut,
  stopZoomOut,
  startFocusNear,
  stopFocusNear,
  startFocusFar,
  stopFocusFar,
  startIrisOpen,
  stopIrisOpen,
  startIrisClose,
  stopIrisClose,
}) => (
  <div className="video">
    <VideoPlayer
      playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
      playerId="reactFlowPlayer"
      live
      fullscreen={false}
      className="video-container"
      sources={[
        {
          type: 'video/flash',
          src: 'rtmp://117.78.28.237:1935/hls/live',
        },
      ]}
    />
    <div className="video-control">
      <div className="video-control-title">控制面板</div>
      <Row gutter={6}>
        <Col span={24} className="video-control-direction">
          <Row gutter={6}>
            <Col span={24} className="video-control-direction-col">
              <ButtonGroup>
                <Button type="primary" onMouseDown={startUpLeft} onMouseUp={stopUpLeft}>
                  <Icon type="arrow-up" className="video-control-up-left" />
                </Button>
                <Button type="primary" onMouseDown={startTiltUp} onMouseUp={stopTiltUp}>
                  <Icon type="arrow-up" />
                </Button>
                <Button type="primary" onMouseDown={startUpRight} onMouseUp={stopUpRight}>
                  <Icon type="arrow-up" className="video-control-up-right" />
                </Button>
              </ButtonGroup>
            </Col>
            <Col span={24} className="video-control-direction-col">
              <ButtonGroup>
                <Button type="primary" onMouseDown={startPanLeft} onMouseUp={stopPanLeft}>
                  <Icon type="arrow-left" />
                </Button>
                <Button type="primary" onMouseDown={startPanAuto} onMouseUp={stopPanAuto}>
                  <Icon type="play-circle" />
                </Button>
                <Button type="primary" onMouseDown={startPanRight} onMouseUp={stopPanRight}>
                  <Icon type="arrow-right" />
                </Button>
              </ButtonGroup>
            </Col>
            <Col span={24} className="video-control-direction-col">
              <ButtonGroup>
                <Button type="primary" onMouseDown={startDownLeft} onMouseUp={stopDownLeft}>
                  <Icon type="arrow-down" className="video-control-down-left" />
                </Button>
                <Button type="primary" onMouseDown={startTiltDown} onMouseUp={stopTiltDown}>
                  <Icon type="arrow-down" />
                </Button>
                <Button type="primary" onMouseDown={startDownRight} onMouseUp={stopDownRight}>
                  <Icon type="arrow-down" className="video-control-down-right" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="video-control-visual">
          <Row>
            <Col span={24} className="video-control-visual-col">
              <div className="video-control-label">变倍</div>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startZoomIn}
                onMouseUp={stopZoomIn}
              >
                <Icon type="plus" />
              </Button>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startZoomOut}
                onMouseUp={stopZoomOut}
              >
                <Icon type="minus" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="video-control-visual-col">
              <div className="video-control-label">变距</div>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startFocusNear}
                onMouseUp={stopFocusNear}
              >
                <Icon type="plus" />
              </Button>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startFocusFar}
                onMouseUp={stopFocusFar}
              >
                <Icon type="minus" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="video-control-visual-col">
              <div className="video-control-label">光圈</div>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startIrisOpen}
                onMouseUp={stopIrisOpen}
              >
                <Icon type="plus" />
              </Button>
              <Button
                type="primary"
                className="video-control-button"
                onMouseDown={startIrisClose}
                onMouseUp={stopIrisClose}
              >
                <Icon type="minus" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
);

Video.propTypes = {
  startTiltUp: PropTypes.func.isRequired,
  stopTiltUp: PropTypes.func.isRequired,
  startTiltDown: PropTypes.func.isRequired,
  stopTiltDown: PropTypes.func.isRequired,
  startPanLeft: PropTypes.func.isRequired,
  stopPanLeft: PropTypes.func.isRequired,
  startPanRight: PropTypes.func.isRequired,
  stopPanRight: PropTypes.func.isRequired,
  startUpLeft: PropTypes.func.isRequired,
  stopUpLeft: PropTypes.func.isRequired,
  startUpRight: PropTypes.func.isRequired,
  stopUpRight: PropTypes.func.isRequired,
  startDownRight: PropTypes.func.isRequired,
  stopDownRight: PropTypes.func.isRequired,
  startDownLeft: PropTypes.func.isRequired,
  stopDownLeft: PropTypes.func.isRequired,
  startPanAuto: PropTypes.func.isRequired,
  stopPanAuto: PropTypes.func.isRequired,
  startZoomIn: PropTypes.func.isRequired,
  stopZoomIn: PropTypes.func.isRequired,
  startZoomOut: PropTypes.func.isRequired,
  stopZoomOut: PropTypes.func.isRequired,
  startFocusNear: PropTypes.func.isRequired,
  stopFocusNear: PropTypes.func.isRequired,
  startFocusFar: PropTypes.func.isRequired,
  stopFocusFar: PropTypes.func.isRequired,
  startIrisOpen: PropTypes.func.isRequired,
  stopIrisOpen: PropTypes.func.isRequired,
  startIrisClose: PropTypes.func.isRequired,
  stopIrisClose: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Video);
