/**
 * Created by Josh on 8/1/2017.
 */
import React, { Component } from 'react';
import YouTube from './Youtube';
import Thermometer from './Thermometer';

class Bonus extends Component {
    render () {
        return (
            <div>
                <br/>
                <section className="hero is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">BONUS</h1>
                            <h2 className="subtitle">Bonus content for your enjoyment!</h2>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="columns">
                        <div className="column is-one-quarter notification is-success">
                            <strong>Watch a video while you browse:</strong>
                        </div>
                        <div className="column notification is-info">
                            <YouTube videoId="qN80_7rNmcE"/>
                        </div>
                        <div className="column is-one-quarter">
                            <Thermometer/>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="content has-text-centered">
                        <h1 className="title">Check out this website's code at our repository!</h1>
                        <h2 className="subtitle">
                            <a href="https://github.com/Maze5656/Semester-Project">Maze5656@GitHub
                            </a></h2>
                    </div>
                </footer>
            </div>
        )
    };
}

export default Bonus;