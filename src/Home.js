/**
 * Created by Josh on 7/2/2017.
 */
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
let React = require('react');

let HomePage = React.createClass({
    render: function () {
        function ImageItem(props) {
            const item = props.image;
            return (
                <div>
                    <figure className="HomeImages">
                        <img src={item.photoUrl} alt="img1"/>
                    </figure>
                </div>
            );
        }

        function Lister(props) {
            let itemList = {
                "items": [{
                    "id": "1",
                    "photoUrl": img1
                },
                    {
                        "id": "2",
                        "photoUrl": img2
                    },
                    {
                        "id": "3",
                        "photoUrl": img3
                    }
                ]
            };

            const imageArray = itemList.items.map(item => < ImageItem image={item}/>);

            return (
                <div>
                    <div className="Menu">
                        <ul>
                            <li>MUSIC /</li>
                            <li>MOVIES /</li>
                            <li>VINYL /</li>
                            <li>GAMES /</li>
                            <li>POP CULTURE /</li>
                            <li>CLOTHING</li>
                        </ul>
                        <div className="SubMenu">
                            <ul>
                                <li>BUY ~</li>
                                <li>SELL ~</li>
                                <li>TRADE</li>
                            </ul>
                        </div>
                    </div>

                    <div className="LocationBox">
                        <div className="Location">
                            <ul>
                                <li>TOWSON, MD</li>
                                <li>DULANEY VALLEY</li>
                                <li>SHOPPING CENTER</li>
                            </ul>
                        </div>
                        <div className="ShopSchedule">
                            <ul>
                                <li>6239 South Blvd.</li>
                                <li>Corner of Archdale/South Blvd.</li>
                            </ul>
                            <ul>
                                <li>Hours of Operation:</li>
                                <li>Mon-Sat 10AM-9PM</li>
                                <li>Sun 12PM-6PM</li>
                            </ul>
                            <ul className="Location">
                                <li>704.552.8448</li>
                            </ul>
                        </div>
                    </div>
                            <div className="HomeImages">
                                {imageArray}
                    </div>
                </div>
            )
        }

        return <div><Lister /></div>
    }
});

export { HomePage };