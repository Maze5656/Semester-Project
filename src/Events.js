/**
 * Created by Josh on 6/28/2017.
 */
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
let React = require('react');

let Events = React.createClass({
    render: function () {
        function EventItem(props) {
            const event = props.event;
            return (
                <div className="Event">
                    <figure>
                        <img src={event.photoUrl} alt="img2" />
                        <figcaption>
                            <ul>
                                {event.title}
                                <li>Date: {event.date}</li>
                                <li>Time: {event.time}</li>
                                <li>{event.description}</li>
                            </ul>
                        </figcaption>
                    </figure>
                </div>
            );
        }

        function Lister(props) {
            let eventsList = {
                "events": [{
                    "id": "1",
                    "title": "Face-Melter",
                    "photoUrl": img2,
                    "date": "7/11/2018",
                    "time": "1:00PM",
                    "description": "A face-melting event with guitars."
                },
                    {
                        "id": "2",
                        "title": "The Pick of Destiny",
                        "photoUrl": img3,
                        "date": "8/08/2021",
                        "time": "9:00AM",
                        "description": "Featuring a Tribute to the greatest song ever made."
                    },
                    {
                        "id": "3",
                        "title": "Future Past Event",
                        "photoUrl": img4,
                        "date": "12/03/97",
                        "time": "4:00PM",
                        "description": "Scheduled for 1997!"}
                ]
            };

            const mappedArray = eventsList.events.map(event => < EventItem event={event}/>);

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
    }});

export { Events, img2, img3, img4 };