import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {StarFilled, PlayCircleFilled, RightOutlined} from '@ant-design/icons';
import SimilarMovies from '../../img/SimilarMovies.jpg';

export default function MovieRecommend(){
    useEffect( () =>{
        let itemWidget = document.querySelectorAll('.item-widget');
        let itemBg = document.querySelectorAll('.item-bg');
        for(let i=0; i<itemWidget.length; i++){
            itemWidget[i].index = i;
            itemWidget[i].onmouseenter = function(){
                itemBg[itemWidget[i].index].style.display= 'block';
            }
            itemWidget[i].onmouseleave = function(){
                itemBg[itemWidget[i].index].style.display= 'none';
            }
        }
    }, []);
    return (
        <div className="item-thumb">
            <Link to="#" className="item-widget" target="_blank">
                <img className="fn-lazy-n" src={SimilarMovies} alt="Murder on the Orient Express"/>
                <div className="item-bg">
                    <div className="item-bg-tit">
                        <p>Murder on the Orient Express</p><RightOutlined className="rightoutlined" />
                    </div>
                    <div className="item-bg-year">2017 <span style={{marginLeft:'5px', marginRight:'8px'}}>|</span> <StarFilled className='icon-star' style={{marginRight:'5px'}} />6.5</div>
                    <PlayCircleFilled className= "icon-play-watch"/>
                </div>
            </Link>
            <Link className="name" to="#" title="Murder on the Orient Express" target="_blank">Murder on the Orient Express</Link>
        </div>
    );
}