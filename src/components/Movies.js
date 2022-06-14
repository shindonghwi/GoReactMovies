import React, { Component, Fragment } from "react";

export default class Movies extends Component {

    state = { movies: [] }

    componentDidMount() { // Movies가 시작되면 호출됨.
        this.setState({ 
            movies: [
                {id: 1, title: "킹콩", runtime: 142},
                {id: 2, title: "쥬라기월드", runtime: 175},
                {id: 2, title: "타이타닉", runtime: 162},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose a movie</h2>

                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            {m.title}
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }

}