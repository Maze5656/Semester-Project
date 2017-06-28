/**
 * Created by Josh on 6/28/2017.
 */
var React = require('react');

let Events = React.createClass({
    render: function () {
        function EventItem(props) {
            const event = props.event;
            return (
                <div className="Events">
                    <figure>
                        <img src={event.photoUrl}/>
                        <figcaption>
                            <ul>
                                <li>{event.title}</li>
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
                    "photoUrl": "https://s-media-cache-ak0.pinimg.com/236x/5a/18/23/5a18235734019e327369384ced24a054.jpg",
                    "date": "7/11/2018",
                    "time": "1:00PM",
                    "description": "A face-melting event with guitars."
                },
                    {
                        "id": "2",
                        "title": "Event 2",
                        "photoUrl": "https://img1.etsystatic.com/058/0/7372857/il_340x270.689909467_t6qw.jpg",
                        "date": "8/08/21",
                        "time": "9:00AM",
                        "description": "null"
                    },
                    {
                        "id": "3",
                        "title": "Event 3",
                        "photoUrl": "https://s-media-cache-ak0.pinimg.com/236x/5a/18/23/5a18235734019e327369384ced24a054.jpg",
                        "date": "12/03/97",
                        "time": "4:00PM",
                        "description": "nada"}
                ]
            };

            const mappedArray = eventsList.events.map(event => < EventItem event={event}/>);

            return (
                <div>
                    <h1>Upcoming Events</h1>
                    <div className="Events">{mappedArray}</div>
                </div>
            )
        }
        return <div><Lister /></div>
    }});

module.exports = Events;