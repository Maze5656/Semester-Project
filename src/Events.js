/**
 * Created by Josh on 6/28/2017.
 */
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
let React = require('react');

let Events = React.createClass({
    render: function () {
        function EventItem(props) {
            const event = props.event;
            return (
                <div className="Event">
                    <figure>
                        <img src={event.photoUrl} alt="img2" />
                        <ul>
                            <li>{event.name}</li>
                            <li>Date: {event.date}</li>
                            <li>Time: {event.time}</li>
                            <li>{event.description}</li>
                        </ul>
                    </figure>
                </div>
            );
        }

        function Lister(props) {
            let eventsList = {
                "items": [{
                    "id": "1",
                    "name": "Face-Melter",
                    "photoUrl": img3,
                    "date": "7/11/2018",
                    "time": "1:00PM",
                    "description": "Guitar shredding with face melting."
                },
                    {
                        "id": "2",
                        "name": "The Pick of Destiny",
                        "photoUrl": img4,
                        "date": "8/08/2021",
                        "time": "9:00AM",
                        "description": "Featuring a Tribute to the greatest song ever made."
                    },
                    {
                        "id": "3",
                        "name": "Future Past Event",
                        "photoUrl": img5,
                        "date": "12/03/97",
                        "time": "4:00PM",
                        "description": "Scheduled for 1997!"}
                ]
            };

            const mappedArray = eventsList.items.map(event => < EventItem event={event}/>);

            return (
                <div>
                    <div className="Events">
                        <h1>Upcoming Events</h1>
                        {mappedArray}
                    </div>
                </div>
            )
        }
        return <div><Lister /></div>
    }
});

export { Events };