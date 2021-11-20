import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {
  compose,
  lifecycle,
  withPropsOnChange,
  withState,
  withHandlers,
} from 'recompose';
import { fetchCoins } from '../features/coins/coinsSlice';

const { Header, Sider, Content } = Layout;
const MainLayout = ({
  collapsed,
  toggle,
}) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            Show Coins 
          </Menu.Item>
          <Menu.Item key="2">
            Show Coins Data
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

const enhance = compose(
  lifecycle({
    componentDidMount() {
      const { store } = this.props;
      store.dispatch(fetchCoins());
    },
  }),
  withPropsOnChange(['store'], ({ store }) => {
    console.log('store changed', store)
  }),
  withState('collapsed', 'setCollapsed', false),
  withHandlers({
    toggle: ({ collapsed, setCollapsed }) => () => setCollapsed(!collapsed),
  }),
);

export default enhance(MainLayout);
