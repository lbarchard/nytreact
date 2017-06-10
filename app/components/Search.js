// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// This is the main component
var Search = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<div>
				<div id="query">
					<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<form>
							<div className="form-group">
								<label>Topic</label>
								<input type="text" className="form-control" id="topic" placeholder="Type your search here"></input>
							</div>
							<div className="form-group">
								<label>Start Date</label>
								<input type="date" className="form-control" id="topic" placeholder="Start Date"></input>
							</div>
							<div className="form-group">
								<label>End Date</label>
								<input type="date" className="form-control" id="topic" placeholder="End Date"></input>
							</div>
							<button type="submit" className="btn btn-default">Search</button>
						</form>
					</div>
					</div>
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Search;
