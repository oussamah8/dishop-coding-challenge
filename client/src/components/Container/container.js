import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Element from '../Element/element';
import './container.css';
import data from '../../feed/sample.json';

class Container extends Component {
    state = {

    }

    getList = (type) => {
        var list = [];
        data.entries.map((element, index) => {
            if (element.programType === type) {
                list.push(element);
            }
        })
        return list;
    }

    render() {
        return (
            <>
                <div className="container mx-auto">
                    {
                        this.props.page === "home" ?
                            <>
                                <Element page="home" elementPlaceholderText="SERIES" link="/series" elementTitle={"Popular Series"} />
                                <Element page="home" elementPlaceholderText="MOVIES" link="/movies" elementTitle={"Popular Movies"} />
                            </>
                            :
                            this.getList(this.props.page).map((element) => {
                                console.log(element)
                                return (
                                    <Element page={this.props.page} elementPlaceholderImage={element.images["Poster Art"].url} elementTitle={element.title} />
                                )
                            })
                    }
                </div>
            </>
        )
    }

}

export default Container;