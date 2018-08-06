import React from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';

import './PowerCard.scss'

const CardItem = ({ attribute, value = NaN, unit = '', className }) => (
  <div className={`carditem ${className}`}>
    <label className="carditem-attribute">
      {attribute}
    </label>
    <label className="carditem-value">
      {value}
      <span className="carditem-unit">{unit}</span>
    </label>
  </div>
);

CardItem.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
  className: PropTypes.string,
};

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: function (params)
    {
      var tar;
      if (params[1].value != '-')
      {
        tar = params[1];
      }
      else
      {
        tar = params[0];
      }
      return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    show: false,
    data: ['1', '2', '3']

  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    show: false
  },
  series: [

    {
      name: '本日',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'top'
        }
      },
      data: [900, '-', '-']
    },
    {
      name: '平均',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'bottom'
        }
      },
      data: ['-', 154, '-']
    },
    {
      name: '最高',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'bottom'
        }
      },
      data: ['-', '-', '333']
    }
  ]
};


const PowerCard = ({ items }) => (
  <Card bordered={true} className="powercard">
    <div className="powercard-left">
      <Row>
        <Col span={24}>
          <CardItem attribute={items[0].attribute} value={items[0].value} unit={items[0].unit} className="carditem-current">
          </CardItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <CardItem attribute={items[1].attribute} value={items[1].value} unit={items[1].unit} className="carditem-average">
          </CardItem>
        </Col>
        <Col span={12}>
          <CardItem attribute={items[2].attribute} value={items[2].value} unit={items[2].unit} className="carditem-max">
          </CardItem>
        </Col>
      </Row>
    </div>
    <div className="powercard-right">
      <ReactEcharts option={option} style={{ height: '150px' }}>
      </ReactEcharts>
    </div>
  </Card>
);

export default PowerCard;