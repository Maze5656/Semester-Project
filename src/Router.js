/**
 * Created by Josh on 6/30/2017.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

let RouterObj = React.createClass({
    render: function () {
        const Home = () => (
            <div>
                <h2>Homie</h2>
            </div>
        )

        const About = () => (
            <div>
                <h2>About</h2>
            </div>
        )

        const Topic = ({match}) => (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )

        const Topics = ({match}) => (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )

        function Example () {
            const BasicExample = () => (
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Homer</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                    </div>
                </Router>
            )

            return <nav>{BasicExample}</nav>;
        }

        return <nav>{Example}</nav>;
    }
});

export default RouterObj ;