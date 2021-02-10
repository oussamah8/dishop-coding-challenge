import React, { Component } from 'react';
import './footer.css'
import fbIcon from "../../assets/social/facebook-white.svg"
import twitterIcon from "../../assets/social/twitter-white.svg"
import instagramIcon from "../../assets/social/instagram-white.svg"
import appStore from "../../assets/store/app-store.svg"
import playStore from "../../assets/store/play-store.svg"
import windowsStore from "../../assets/store/windows-store.svg"

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <ul className="flex-list">
                        <li>Home</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Collection Statement</li>
                        <li>Help</li>
                        <li>Manage Account</li>
                    </ul>
                    <span>
                        Copyright 2016 DEMO Streaming. All rights Reserved.
                    </span>
                    <div className="iconsRow">
                        <ul className="left">
                            <li><img src={fbIcon}></img></li>
                            <li><img src={twitterIcon}></img></li>
                            <li><img src={instagramIcon}></img></li>
                        </ul>
                        <ul className="right">
                            <li><img src={appStore}></img></li>
                            <li><img src={playStore}></img></li>
                            <li><img src={windowsStore}></img></li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}

export default Footer