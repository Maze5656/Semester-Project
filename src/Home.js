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
                    <figure>
                        <img src={item.photoUrl} alt="img1" />
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
                    </div>

                    <div className="HomeImages">
                        <h2>Welcome</h2>
                        {imageArray}
                    </div>
                </div>
            )
        }
        return <div><Lister /></div>
    }});

export { HomePage, img1, img2, img3 };