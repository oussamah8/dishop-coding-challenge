import React, { Component } from 'react'
import Header from '../../components/Header/header'
import Container from '../../components/Container/container'
import Footer from '../../components/Footer/footer'


class Movies extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Header title="Popular Movies" />
                <Container page="movie" />
                <Footer />
            </>
        )
    }
}

export default Movies