var React = require('react');
var Mui = require('material-ui')
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var menuItems = [
  {route: 'home', text : 'The Wedding'},
  {route: 'people', text : 'The People'},
  {route: 'photos', text : 'The Photos'}
]

var WeddingApp = React.createClass({

  mixins: [Router.Navigation, Router.State],

  render: function() {
  	
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
	    		selectedIndex={this._getSelectedIndex()}
	    		onChange={this._onMenuItemClick} />

	    	<RouteHandler />
    	</div>
    );
  },

  _getSelectedIndex: function() {
    for (var i = 0; i < menuItems.length; i++) {
      var item = menuItems[i]
      if (this.context.router.isActive(item.route)) {
        return i;
      }
    }

    return 0;
  },

  _onMenuItemClick: function(e, selectedIndex, menuItem) {
  	this.context.router.transitionTo(menuItem.route);
  },

  _onActionBarToggleClicked: function(e) {
  	this.refs.leftNav.toggle();
  }
});

module.exports = WeddingApp;
