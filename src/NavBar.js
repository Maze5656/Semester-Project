/**
 * Created by Josh on 6/18/2017.
 */
// Component class for the nav links in the homepage
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import { HomePage } from './Home';
import { Events } from './Events'
import { About }from './About';
var React = require('react');

let NavBar = React.createClass({
    render: function () {
            function Navi () {
                return (
                    <BrowserRouter>
                        <div className="Navigation">
                            <div className="columns">
                                <div className="column is-half nav-center notification is-white">
                                    <ul>
                                        <li>
                                            <Link to="/">-Home-</Link>
                                        </li>
                                        <li>
                                            <Link to="/Events">-Events-</Link>
                                        </li>
                                        <li>
                                            <Link to="/About">-About-</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Route path="/" exact component={HomePage}/>
                            <Route path="/Events" exact component={Events}/>
                            <Route path="/About" exact component={About}/>
                        </div>
                    </BrowserRouter>
                );
        }
        return <Navi />;
    }
});

export default NavBar; // This line sets what you get when you import this component module