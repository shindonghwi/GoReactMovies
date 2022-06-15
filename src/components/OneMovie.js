import React, { Component, Fragment, useEffect } from 'react'

export default class OneMovie extends Component {
    state = { movie: {} }

    componentDidMount() {
        this.setState({
            movie: {
                id: '1',
                title: 'Some movie',
                runtime: 150
            }
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Movie: {this.state.movie.title}</h2>
                <table className='table table-compact table-striped'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Id: </strong></td>
                            <td>{this.state.movie.id}</td>

                            <td><strong>Title: </strong></td>
                            <td>{this.state.movie.title}</td>

                            <td><strong>Runtime: </strong></td>
                            <td>{this.state.movie.runtime}</td>
                        </tr>
                    </tbody>

                </table>
            </Fragment>
        )
    }

}
