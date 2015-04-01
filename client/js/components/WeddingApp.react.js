var React = require('react');
var Mui = require('material-ui')

var WeddingApp = React.createClass({

  render: function() {
    return (
    	<div>
	    	<Mui.AppBar title="Daniel &amp; Melanie"/>

	    	<Mui.RaisedButton label="Default" />
    	</div>
    );
  }

});

module.exports = WeddingApp;
