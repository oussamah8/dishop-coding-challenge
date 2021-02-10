import React, { Component } from 'react'
import Header from '../../components/Header/header'
import Container from '../../components/Container/container'
import Footer from '../../components/Footer/footer'


class Series extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Header title="Popular Series" />
                <Container page="series" />
                <Footer />
            </>
        )
    }
}

export default Series