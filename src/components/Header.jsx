import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Breadcrumb, Icon } from 'antd';
import './Header.scss';
import { pages } from '../setting';

const breadcrumbNameMap = {
  '/power': { title: '实时功耗监控', icon: 'home' },
  '/alarm': { title: '路灯故障报警', icon: 'home' },
  '/location': { title: '路灯位置管理', icon: 'home' },
  '/maintenance': { title: '运维管理', icon: 'home' },
  '/strategy': { title: '亮灯策略管理', icon: 'home' },
  '/wheather': { title: '气象检测管理', icon: 'home' },
  '/video': { title: '视屏实时监控', icon: 'home' },
};
const Header = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems =
    pathSnippets.length !== 0 ? (
      pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Icon type={breadcrumbNameMap[url].icon} />
            <Link to={url}>{breadcrumbNameMap[url].title}</Link>
          </Breadcrumb.Item>
        );
      })
    ) : (
      <Breadcrumb.Item key="/wheather">
        <Icon type="home" />
        <Link to="/wheather">气象检测管理</Link>
      </Breadcrumb.Item>
    );

  return (
    <Layout.Header className="header">
      <div className="header-left">
        <div className="header-title">智慧路灯管理系统</div>
        <div className="header-subTitle">STREET LAMP MANAGEMENT SYSTEM</div>
      </div>
      <div className="header-right">
        <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
      </div>
    </Layout.Header>
  );
});

export default Header;
