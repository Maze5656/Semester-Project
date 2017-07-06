/**
 * Created by Josh on 7/3/2017.
 */
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
let React = require('react');

let About = React.createClass({
    render: function () {
        function EventItem(props) {
            const event = props.event;
            return (
                <div className="Event">
                    <figure>
                        <img src={event.photoUrl} alt="A founding member" />
                        <ul>
                            <li>{event.name}</li>
                            <li>"<em>{event.quote}"</em></li>
                        </ul>
                    </figure>
                </div>
            );
        }

        function Lister(props) {
            let eventsList = {
                "items": [{
                    "id": "1",
                    "name": "Simon Pegg",
                    "photoUrl": img6,
                    "quote": "You've got red on you."
                },
                    {
                        "id": "2",
                        "name": "Weird Al Yankovic",
                        "photoUrl": img7,
                        "quote": "When was the last time you were completely de-loused?"
                    },
                    {
                        "id": "3",
                        "name": "Uncle Phil",
                        "photoUrl": img8,
                        "quote": "Pillowy mounds of mashed potatoes"}
                ]
            };

            const mappedArray = eventsList.items.map(event => < EventItem event={event}/>);

            return (
                <div>
                    <div className="Events">
                        <p className="About">
                            We are dedicated to bringing albums and
                            merchandise to music lovers from all walks of life.
                        </p>
                        <h1>Our Founding Members</h1>
                        {mappedArray}
                    </div>
                </div>
            )
        }
        return <div><Lister /></div>
    }
});

export { About };