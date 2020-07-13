import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div className="footer-seolink">
            <div className="footer-seolink-layer container">
                    <Link className="link" to="#">About US</Link>
                    <Link className="link" to="#">DMCA</Link>
                    <Link className="link" to="#">Privacy Policy</Link>
                    <Link className="link" to="#">Terms of Service</Link>
                    <Link className="link" to="#">Disclaimer</Link>
                    <Link className="link" to="#">Contact US</Link>
            </div>
            <div className="copyright container">
                Copyright ©2020 iGoMovie.com
            </div>
        </div>
    );
}