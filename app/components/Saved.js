// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var SavedItem = require("./SavedItem");

// This is the main component
var Saved = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	renderSavedItems: function() {
		return <SavedItem />
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<div>
				<div id="query">
					<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Saved Articles</h3>
					</div>
						<div className="panel-body">
							<ul className="list-group">
								{this.renderSavedItems()}
							</ul>
						</div>
					</div>
				</div>
			</div>		);
	}
});

// Export the component back for use in other files
module.exports = Saved;
