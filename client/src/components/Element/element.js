import React from 'react';
import './element.css';
import Placeholder from '../../assets/placeholder.png'
import { Link } from 'react-router-dom';

function Element(props) {

    return (
        <>
            <Link to={props.link} className="element">

                <div className="elementImage">
                    {props.page === "home" ?
                        <>
                            <img src={Placeholder} alt="" />
                            <div className="placeholderText">
                                {props.elementPlaceholderText}
                            </div>
                        </>
                        :
                        <>
                            <img src={props.elementPlaceholderImage} alt="" />
                        </>
                    }
                </div>
                <div className="elementTitle">
                    {props.elementTitle}
                </div>


            </Link>
        </>
    )
}

export default Element;