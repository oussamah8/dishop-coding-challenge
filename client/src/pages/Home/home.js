import React, { Component } from 'react'
import Header from '../../components/Header/header'
import Container from '../../components/Container/container'
import Footer from '../../components/Footer/footer'


class Home extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Header title="Popular Titles" />
                <Container page="home" />
                <Footer />
            </>
        )
    }
}

export default Home