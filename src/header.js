import React, {Component} from "react";
import { Layout, Menu } from 'antd';
import {MenuOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {NavLink, Link} from "react-router-dom";
import logo from './img/logo.png';

const { SubMenu } = Menu;
const { Header, Sider, Content} = Layout;

export default class MainHeader extends Component{

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    } 
   toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render(){
        return (
            {/* <Row 
            >
                <Col span={5} >

                </Col>
                <Col span={19} push={5} ></Col>
            </Row> */}
            
        );
    }
}