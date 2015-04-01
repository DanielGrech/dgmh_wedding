var WeddingApp = require('./components/WeddingApp.react')
var InjectTapEventPlugin = require("react-tap-event-plugin");
var React = require('react');

window.React = React; // export for http://fb.me/react-devtools

InjectTapEventPlugin();

React.render(
    <WeddingApp />,
    document.getElementById('app_container')
);
