var InjectTapEventPlugin = require("react-tap-event-plugin");
var Router = require('react-router');
var React = require('react');
var AppRoutes = require('./routes');

window.React = React; // export for http://fb.me/react-devtools

InjectTapEventPlugin();

Router.create({
	routes: AppRoutes,
})
.run(function(Handler) {
	React.render(<Handler/>, document.getElementById('app_container'));
})