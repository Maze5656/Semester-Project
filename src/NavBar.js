/**
 * Created by Josh on 6/18/2017.
 */
// Component class for the nav links in the homepage
var React = require('react');

var NavBar = React.createClass({
    render: function () {
        var pages = ['Membership', 'Calendar', 'About'];
        var navLinks = pages.map(function(page){
            return (
                <a href={'#' + page}>
                {page}
                </a>
            );
        });

        return <nav>{navLinks}</nav>;
    }
});

module.exports = NavBar; // This line sets what you get when you import this component module