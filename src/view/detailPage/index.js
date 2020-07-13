import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Affix} from 'antd';
import {StarFilled, PlayCircleFilled} from '@ant-design/icons';
import MovieRecommend from './movieRecommend';
import MovieRecommend2 from './movieRecommend2';
import top_bar_img from '../../img/top_bar_img.jpg';
import v_poster from '../../img/v_poster.jpg';
import prime from '../../img/prime.png';
import no_source from '../../img/no-source.jpg';
import layer from '../../img/layer.png';
import close from '../../img/close.png';
import video_list_1 from '../../img/video_list_1.jpg';
import video_list_2 from '../../img/video_list_2.jpg';
import video_list_3 from '../../img/video_list_3.jpg';
import video_list_4 from '../../img/video_list_4.jpg';
import video_list_5 from '../../img/video_list_5.jpg';
import video_list_6 from '../../img/video_list_6.jpg';
import video_list_7 from '../../img/video_list_7.jpg';
import video_list_8 from '../../img/video_list_8.jpg';
import actor1 from '../../img/actor1.jpg';
import actor2 from '../../img/actor2.jpg';
import actor3 from '../../img/actor3.jpg';


export default class Detail extends Component {

    constructor(props){
        super(props);
        this.state={
            moreInfo:false,
            show_dd:true,
            close:false
        }
    }
    changeMargin =()=>{
        let left_box = document.getElementById('left_box');
        left_box.style.margin =0;
    }
    handleMoreInfo =() =>{
        this.setState({moreInfo:!this.state.moreInfo});
    }
    handleShow_dd=() =>{
        let dd_summary = document.getElementById('dd-summary');
        this.setState({show_dd:!this.state.show_dd});
        dd_summary.style.textOverflow = 'none';
    }
    close_ad_0901 = () =>{
        this.setState({close:!this.state.close})
    }
    render(){
        return (
            <div className='v-detail'>
                <div className="v-top-bar">
                    <img src={top_bar_img} alt="" className="bar-on" />
                    <div className="v-top-bar-bg">
                        <div className="navigation">
                            <Link to="">Home</Link> &gt; <Link to="">Movies</Link> &gt; <Link to="">Action Movies</Link> &gt; <span>Bad Boys for Life</span>
                        </div>
                        <div className="v-title" id="v-title">
                            <h2>Bad Boys for Life</h2> <span>2020</span> <span className="tagline"><i style={{fontStyle: 'italic', fontWeight: 'normal'}}>"Ride together. Die together."</i></span>
                        </div>
                    </div>
                </div> 
                <Row 
                    className="v-detail-box"
                >
                    <Col span={5} >   
                        <Affix offsetTop={0} onChange={() =>this.changeMargin()}>
                            <div id="left_box" className="v-left-box">
                                <div className="v-poster">
                                    <img src={v_poster} alt="Bad Boys for Life" />
                                </div>
                                <div className="v-watch-btn">
                                    <span>AD <span style={{fontSize: '12px', color: '#999'}}>This title is not available on Prime Video</span></span>
                                    <div> <img src={prime} alt='' /> </div>
                                    <Link to="https://www.amazon.com/gp/video/offers?skipMarketingPage=1&ref_=asc_showname&tag=shadls01-20" className="now" target="_blank">Start 30-day Free Trial</Link>
                                    <Link to="" className="source">View All Sources</Link>
                                </div>
                            </div>
                        </Affix> 
                    </Col>
                    <Col span={19}>
                        <div className="v-detail-desc">
                            <div className="rating"> 
                                <span style={{paddingLeft:0}}>
                                <StarFilled className='icon-star' />6.7</span>
                                | <span>2h4m</span>| 
                                <span className='icon_R'>
                                R</span>| <span>en</span>| <span><Link to='' style={{textDecoration: 'underline',cursor: 'pointer'}} onClick={this.handleMoreInfo}>More Info</Link></span> </div>
                            {
                            this.state.moreInfo &&
                            (<div className="addition" id="addition">
                                <div>Released: 15 January 2020 Released</div>
                                <div>Producted By: Columbia Pictures</div>
                                <div>Country: </div>
                                <div>Budget: 0</div>
                                <div>Revenue: 0</div>
                                <div>Official Website: https://www.badboysforlife.movie/</div>
                            </div>)
                            }
                            <div className="summary clearfix">
                                <Row>
                                    <Col span={12} >
                                        <div className='summary_left'>
                                            Synopsis
                                            <p id="dd-summary">Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.
                                            </p>
                                            {this.state.show_dd && <span onClick={this.handleShow_dd}>... View More</span>}
                                        </div>
                                        <div>
                                            Stream Online
                                            <p>The movie is currently not available onine</p>
                                        </div>
                                    </Col>
                                    <Col span={12} >
                                    <div>
                                        Cast
                                        <p><Link to= ''>Will Smith</Link> , <Link to=''>Martin Lawrence</Link> , <Link to=''>Paola Nuñez</Link></p>
                                    </div>
                                    <div>
                                        Director
                                        <p></p>
                                    </div>
                                    <div>
                                        Producted By
                                        <p>Columbia Pictures</p>
                                    </div>
                                    </Col>
                                </Row>
                            </div>  
                        </div>
                        <div className="v-detail-xps">
                            <img 
                                src={no_source} 
                                alt=''
                                style={{
                                    position:'absolute',
                                    top:0,
                                    right:'20%'
                                }}
                             />
                            <div style={{
                                position:'absolute',
                                top:0,
                                left:0,
                            }}>
                                <img src={layer} alt='' />
                                <span
                                    style={{
                                        position:'absolute',
                                        top:"3%",
                                        left:'10px'
                                    }}
                                >AD</span>
                                <div className="v-detail-xps-desc">
                                    <h3>Stream over<br /> 800,000 titles<br /> with Prime Video </h3>
                                    <span> 30-day Free Trial, cancel anytime</span>
                                    <Link to="https://www.amazon.com/gp/video/offers?skipMarketingPage=1&ref_=asc_showname&tag=shadls01-20" className="now" target="_blank">Start 30-day Free Trial</Link>
                                </div>
                            </div>
                        </div>
                        <div className="v-detail-box-show">
                            <h2>Trailers &amp; Images</h2>
                            <div className="trailer clearfix">
                                <Row>
                                    <Col span={18} className="np video-img">
                                        <div id="player-box">
                                           <iframe src='https://www.youtube.com/embed/jKCj3XuPG8M' title='v' allowFullScreen=''></iframe>                  
                                        </div>
                                        { !this.state.close &&(<div id="ad_0901">
                                            <span>Unlimited Streaming with Prime Video</span>
                                            <Link to="/location/amazon">Try 30 days Free</Link>
                                            <span><img src={close} alt='close' onClick={this.close_ad_0901} /></span>
                                        </div>)}
                                    </Col>
                                    <Col span={6} className="np">
                                        <div className="video-list">
                                            <ul>
                                            <li>
                                                <img src={video_list_1} data-tag="v" data-code="jKCj3XuPG8M" alt='' />
                                                <PlayCircleFilled className= "icon-v-watch"/>
                                            </li>
                                            <li><img src={video_list_2} data-tag="p" data-code="/iP24dtztrxdnVDE4RR4g0KFo7wg.jpg" alt='' /></li>
                                            <li><img src={video_list_3} data-tag="p" data-code="/iAg68Ir7w4Ih8Iz2leKXRAMTECR.jpg" alt='' /></li>
                                            <li><img src={video_list_4} data-tag="p" data-code="/mRUAWQ1zHEIdt6NUFcWz8UFj0N4.jpg" alt='' /></li>
                                            <li><img src={video_list_5} data-tag="p" data-code="/2uxVW6XFvEqoCJoIVU8C8JgOnnB.jpg" alt='' /></li>
                                            <li><img src={video_list_6} data-tag="p" data-code="/pX6rudzVRE0PqaTxPpPBmmxUdqu.jpg" alt='' /></li>
                                            <li><img src={video_list_7} data-tag="p" data-code="/4WnIfKWV962xYjV1dGxDXi0onvK.jpg" alt='' /></li>
                                            <li><img src={video_list_8} data-tag="p" data-code="/gDj2pexYOTNW702D6iCe9hBqmtb.jpg" alt='' /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="v-detail-box-show">
                            <div className="v-detail-box-show-title trigger">
                                <ul className="clearfix">
                                    <li data-tag="cast_video" className="curr">Top Credited Cast<i></i></li>
                                    <li>|</li>
                                    <li data-tag="cast_crew">Crew<i></i></li>
                                </ul>
                            </div>
                            <div className="v-item-box">
                                <div id="cast_video" className="clearfix">
                                    <div className="v-cast-thumb">
                                        <div className="v-cast-thumb-title">
                                            <img src={actor1} alt='' />
                                            <div className="x"><Link to="#">Will Smith</Link><span> as Detective Mike Lowrey</span></div>
                                        </div>
                                        <div className="v-cast-thumb-list">
                                            <ul>
                                                <li>
                                                    
                                                    <span><Link to="#">Bad Boys for Life</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">Will Smith's Bucket List</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">Spies in Disguise</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Aladdin</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">Gemini Man</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">One Strange Rock</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">Quincy</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">Bright</Link></span>
                                                </li>
                                                <li>
                                                    
                                                    <span><Link to="#">The American Can</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Collateral Beauty</Link></span>
                                                </li>
                                            </ul>
                                        </div>  
                                    </div>
                                    <div className="v-cast-thumb">
                                        <div className="v-cast-thumb-title">
                                            <img src={actor2} alt='' />
                                            <div className="x"><Link to="#">Martin Lawrence</Link><span> as Detective Marcus Burnett</span></div>
                                        </div>
                                        <div className="v-cast-thumb-list">
                                            <ul>
                                                <li>
                                                    <span><Link to="#">Bad Boys for Life</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">The Beach Bum</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">Def Comedy Jam 25</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">Martin Lawrence Doin’ Time</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">Big Mommas: Like Father, Like Son</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Death at a Funeral</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Welcome Home Roscoe Jenkins</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">College Road Trip</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Wild Hogs</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">Martin Lawrence Presents 1st Amendment Stand-Up</Link></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="v-cast-thumb">
                                        <div className="v-cast-thumb-title">
                                            <img src={actor3} alt='' />
                                            <div className="x"><Link to="#">Paola Nu&#xF1;ez</Link><span> as Rita</span></div>
                                        </div>
                                        <div className="v-cast-thumb-list">
                                            <ul>
                                                <li>
                                                    <span><Link to="#">Bad Boys for Life</Link></span>
                                                </li>
                                                <li>
                                                    <span className='free'>Free</span>
                                                    <span><Link to="#">The Purge</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">Queen of Hearts</Link></span>
                                                </li>
                                                <li>
                                                    <span><Link to="#">Behind the Power</Link></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="v-detail-box-show">
                            <h2>Similar Movies to Bad Boys for Life</h2> 
                            <div className="recommend">
                                <div className="recommend-box clearfix">
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                    <MovieRecommend />
                                </div>
                            </div>
                        </div>
                        <div className="v-detail-box-show">
                            <h2> You May Also Like </h2>
                            <div className="recommend">
                                <div className="recommend-box clearfix">
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                    <MovieRecommend2 />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>   
            </div> 
        );
    }
}
