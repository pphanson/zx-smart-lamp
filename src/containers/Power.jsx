import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from '../components/Map';
import Line from '../components/Line';
import Table from 'antd/lib/table';
import { Col, Row, Card } from 'antd';
import PowerCard from '../components/PowerCard';
import './Power.scss';

const { Column } = Table;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const dayItems = [
  {
    attribute: '本日消耗',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '日平均',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '单日最高',
    value: 15.7,
    unit: 'KW',
  },
];

const weekItems = [
  {
    attribute: '本周消耗',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '周平均',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '单周最高',
    value: 15.7,
    unit: 'KW',
  },
];

const monthItems = [
  {
    attribute: '本月消耗',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '月平均',
    value: 15.7,
    unit: 'KW',
  },
  {
    attribute: '单月最高',
    value: 15.7,
    unit: 'KW',
  },
];

const Power = () => (
  <div className="power">
    <div className="power-left">
      <div className="power-left-map">
        <Map />
      </div>
      <div className="power-left-cards">
        <PowerCard items={dayItems} />
        <PowerCard items={weekItems} />
        <PowerCard items={monthItems} />
      </div>
      <div className="power-left-line">
        <Line />
      </div>
    </div>
    <div className="power-right">
      <Table bordered title={() => '路灯列表'}>
        <Column title="路灯编号" dataIndex="code" key="code" align="center" />
        <Column title="能源消耗" dataIndex="comsuption" key="comsuption" align="center" />
        <Column title="状态" dataIndex="status" key="status" align="center" />
      </Table>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Power);
