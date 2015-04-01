var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var WeddingApp = require('./components/WeddingApp.react')
var TheWedding = require('./components/TheWedding.react')
var ThePeople = require('./components/ThePeople.react')
var ThePhotos = require('./components/ThePhotos.react')
var NotFound = require('./components/NotFound.react')

var AppRoutes = (
	<Route name="app" path="/" handler={WeddingApp}>
		<Route name="home" handler={TheWedding} />
		<Redirect from="thewedding" to="home" />
		<Redirect from="wedding" to="home" />
		

		<Route name="people" handler={ThePeople} />
		<Redirect from="thepeople" to="people" />


		<Route name="photos" handler={ThePhotos} />
		<Redirect from="thephotos" to="photos" />

		<DefaultRoute handler={TheWedding} />
		<NotFoundRoute handler={NotFound} />
	</Route>
);

module.exports = AppRoutes;