import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row, Card } from 'antd';
import { wheather } from 'setting';
import ReactEcharts from 'echarts-for-react';

import './Wheather.scss';

const { Meta } = Card;

const option = {
  series: [
    {
      id: 'temperature',
      name: '温度',
      type: 'line',
      // sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 0,
        tooltip: 0,
      },
    },
    {
      id: 'humidity',
      name: '湿度',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 1,
        tooltip: 1,
      },
    },
    {
      id: 'illuminance',
      name: '光照度',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 2,
        tooltip: 2,
      },
    },
    {
      id: 'windspeed',
      name: '风速',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 3,
        tooltip: 3,
      },
    },
    {
      id: 'winddirection',
      name: '风向',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 4,
        tooltip: 4,
      },
    },
    {
      id: 'pm10',
      name: 'PM10',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 5,
        tooltip: 5,
      },
    },
    {
      id: 'pm2_5',
      name: 'PM2.5',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 6,
        tooltip: 6,
      },
    },
    {
      id: 'rainfallperhour',
      name: '时雨量',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 7,
        tooltip: 7,
      },
    },
    {
      id: 'rainfallperday',
      name: '天雨量',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 8,
        tooltip: 8,
      },
    },
    {
      id: 'rainfallpermonth',
      name: '月雨量',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 9,
        tooltip: 9,
      },
    },
    {
      id: 'sumofrainfall',
      name: '总雨量',
      type: 'line',
      sampling: 'average',
      showSymbol: false,
      encode: {
        x: 11,
        y: 10,
        tooltip: 10,
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    // formatter(params) {
    //   params = params[0];
    //   const date = new Date(params.data[11]);
    //   return `${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}`;
    // },
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    textStyle: {
      color: '#fff',
    },
    data: [
      '温度',
      '湿度',
      '光照度',
      '风速',
      '风向',
      'PM10',
      'PM2.5',
      '时雨量',
      '天雨量',
      '月雨量',
      '总雨量',
    ],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'time',
    boundaryGap: false,
    axisLabel: {
      color: 'white',
    },
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: 'white',
    },
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
  },
};

const formatTimeString = date => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const populateData = (data) => {
  const obj = {};

  obj.time = data.length > 0 ? formatTimeString(new Date(data[0][2])) : '';

  for (const [index, item] of data.entries()) {
    if (index === 0) {
      obj.temperature = item[0];
      obj.humidity = item[1];
    }

    if (index === 1) {
      obj.illuminance = item[0];
    }

    if (index === 2) {
      obj.windspeed = item[0];
    }

    if (index === 3) {
      obj.winddirection = item[0];
    }

    if (index === 4) {
      obj.pm10 = item[0];
      obj.pm2_5 = item[1];
    }

    if (index === 5) {
      obj.rainfallperhour = item[0];
    }

    if (index === 6) {
      obj.rainfallperday = item[0];
    }

    if (index === 7) {
      obj.rainfallpermonth = item[0];
    }

    if (index === 8) {
      obj.sumofrainfall = item[0];
    }
  }
  return obj;
};

const mapStateToProps = state => ({
  realData: populateData([...state.weather.realtime]),
  lineOption:
    state.weather.range.length > 0
      ? Object.assign({ dataset: { source: [...state.weather.range] } }, option)
      : option,
});

const mapDispatchToProps = dispatch => ({});

const Wheather = ({ realData, lineOption, notMerge }) => (
  <Row gutter={{ xl: 16, md: 12, sm: 10 }}>
    {wheather.map(item => (
      <Col xl={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} key={item.name}>
        <Card
          hoverable
          className="wheather-card"
          bordered={false}
          cover={<img className="wheather-icon" alt="example" src={item.icon} />}
        >
          <Meta
            title={<span className="wheather-title">{item.title}</span>}
            className="wheather-meta"
            description={<span className="wheather-value">{realData[item.name]}</span>}
          />
        </Card>
      </Col>
    ))}
    <Col span={24} style={{ height: '300px' }}>
      <ReactEcharts
        option={lineOption}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
    </Col>
  </Row>
);

Wheather.propTypes = {
  realData: PropTypes.object.isRequired,
  lineOption: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wheather);
