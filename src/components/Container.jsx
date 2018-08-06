import { Layout, Icon, Menu } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import { pages } from '../setting';

const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const Container = () => (
  <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" trigger={null} width={250}>
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
            {
              pages.map((page) => (
                page.pages ? 
                <SubMenu key={page.key} title={<Link to={page.link || '#'}><Icon type={page.icon} />{page.title}</Link>}>
                {
                    page.pages ? page.pages.map(( subPage ) => (
                      <Menu.Item key={subPage.key}><Link to={subPage.link || '#'}>{subPage.title}</Link></Menu.Item>
                    )): ''
                }
                </SubMenu> :
                <Menu.Item key={page.key}><Link to={page.link || '#'}>{page.title}</Link></Menu.Item>
              ))
            }
          </Menu>
        </Sider>
      <Content style={{ minHeight: 280 }}>
          <Routes />
        </Content>
    </Layout>);

export default Container;
