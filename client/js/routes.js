var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var WeddingApp = require('./components/WeddingApp.react')
var TheWedding = require('./components/pages/TheWedding.react')
var ThePeople = require('./components/pages/ThePeople.react')
var ThePhotos = require('./components/pages/ThePhotos.react')
var NotFound = require('./components/NotFound.react')

var strings = require('./strings');

var AppRoutes = (
	<Route name="app" path="/" handler={WeddingApp}>
		<Route name={strings.route.home} handler={TheWedding} />
		<Redirect from="thewedding" to="home" />
		<Redirect from="wedding" to="home" />
		

		<Route name={strings.route.people} handler={ThePeople} />
		<Redirect from="thepeople" to="people" />


		<Route name={strings.route.photos} handler={ThePhotos} />
		<Redirect from="thephotos" to="photos" />

		<DefaultRoute handler={TheWedding} />
		<NotFoundRoute handler={NotFound} />
	</Route>
);

module.exports = AppRoutes;