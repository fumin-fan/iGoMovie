import React, {Component} from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import {MenuOutlined, MenuFoldOutlined} from '@ant-design/icons';
import logo from './img/logo.png';
import Detail from './view/detailPage/index';
import Subscribe from './subscribe';
import Footer from './footer';


const { Header, Sider } = Layout;
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          collapsed: true,
      }
  } 
  toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
  };
  render(){
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible 
          collapsed={this.state.collapsed}
          collapsedWidth='0'
          width='12.5%'
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Movie</Menu.Item>
              <Menu.Item key="3">TV Shows</Menu.Item>
              <Menu.Item key="4">Free Movies</Menu.Item>
          </Menu>
        </Sider>
        
        <Layout className="site-layout">
          <Row>
            <Col span={18} push={3}>
              <Header className="site-layout-background" >
                  {React.createElement(this.state.collapsed ? MenuOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                  })}
                   <img src={logo} alt="logo图" id='logo'/>
                  <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Movie</Menu.Item>
                    <Menu.Item key="3">TV Shows</Menu.Item>
                    <Menu.Item key="4">Free Movies</Menu.Item>
                  </Menu>
              </Header>
            </Col>
          </Row>
          <Row style={{ backgroundColor:'#0f0f0f'}}>
            <Col span={18} push={3} >
               <Detail />
            </Col>
          </Row>
          <Row style={{ backgroundColor:'#1B1B1B'}}>
            <Col span={18} push={3} >
               <Subscribe />
            </Col>
          </Row>
          <Row style={{ backgroundColor:'#e7e7e7'}}>
            <Col span={18} push={3} >
               <Footer />
            </Col>
          </Row>
        </Layout>
      </Layout> 
    );
  }
}

export default App;
