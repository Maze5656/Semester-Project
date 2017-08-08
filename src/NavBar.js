/**
 * Created by Josh on 6/18/2017.
 */
// Component class for the nav links in the homepage
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import ReactGA from 'react-ga';
import { HomePage } from './Home';
import { Events } from './Events'
import { About }from './About';
import Bonus from './Bonus';
var React = require('react');

ReactGA.initialize('UA-104082255-1');

function Analytics(props){
    ReactGA.set({ page: props.location.pathname + props.location.search });
    ReactGA.pageview(props.location.pathname + props.location.search);
    return null;
}

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
                                            <a className="button is-info"><Link to="/">-HOME-</Link></a>
                                        </li>
                                        <li>
                                            <a className="button is-info"><Link to="/Events">-EVENTS-</Link></a>
                                        </li>
                                        <li>
                                            <a className="button is-info"><Link to="/About">-ABOUT-</Link></a>
                                        </li>
                                        <li>
                                            <a className="button is-primary"><Link to="/Bonus">-BONUS-</Link></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Route path="/" component={Analytics} />
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/Events" exact component={Events}/>
                            <Route path="/About" exact component={About}/>
                            <Route path="/Bonus" exact component={Bonus}/>
                        </div>
                    </BrowserRouter>
                );
        }
        return <Navi />;
    }
});

export default NavBar; // This line sets what you get when you import this component module