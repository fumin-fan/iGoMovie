import React from 'react';
import {Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import prime from './img/prime.png';

export default function Subscribe(){
    return (
        <div className="subscribe">
            <div className="container clearfix">
                <Row>
                    <Col span={12}>
                        <div className="subscribe-title">GET iGoMovie EMAIL UPDATE</div>
                        <div className="subscribe-box">
                            <input type="text" id="email_addr" className="email" placeholder="email address" />
                            <input type="button" defaultValue="Submit" className="btn" onclick="subscribeX()" />
                        </div>
                        <div id="message_x"></div>
                        <div id="error_x"></div>
                    </Col>
                    <Col span={12}>
                        <Link to="#" target="_blank">
                            <div className="primeWrap">
                                <img src={prime} alt='' />
                            </div>
                            <span className='subscribeTxt'>
                                Unlimited Streaming<br /> with Prime Video
                            </span>
                            <span className="tryFree">
                                TRY 30-DAY FREE
                            </span>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
}