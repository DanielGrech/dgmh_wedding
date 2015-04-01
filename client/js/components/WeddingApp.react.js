var React = require('react');
var Mui = require('material-ui')
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var WeddingApp = React.createClass({

  render: function() {
  	var menuItems = [
		{text : 'The Wedding'},
		{text : 'The People'},
		{text : 'The Photos'}
    ]

    return (
    	<div>
	    	<Mui.AppBar 
	    		title="Daniel &amp; Melanie"
	    		zDepth={0}
	    		onMenuIconButtonTouchTap={this._onActionBarToggleClicked} />
	    	
	    	<Mui.LeftNav 
	    		ref="leftNav"
	    		menuItems={menuItems}
	    		docked={false}
	    		selectedIndex={0}
	    		onChange={this._onMenuItemClick} />

	    	<RouteHandler />
    	</div>
    );
  },

  _onMenuItemClick: function(e, selectedIndex, menuItem) {
  	console.log(e);
  	console.log(selectedIndex);
  	console.log(menuItem)
  },

  _onActionBarToggleClicked: function(e) {
  	this.refs.leftNav.toggle();
  }
});

module.exports = WeddingApp;
