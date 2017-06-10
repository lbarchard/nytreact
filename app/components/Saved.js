// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// This is the main component
var Saved = React.createClass({

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
						<h3 className="panel-title">Saved Articles</h3>
					</div>
						<div className="panel-body">
							<ul className="list-group">
								<li className="list-group-item">
									<div className="text-center">Date Saved: 2017/07/12</div>
									<a href="https://www.w3schools.com">Man lands on the moon</a>		
									<span type="button" className="pull-right btn btn-primary btn-xs">Remove</span>
									<br></br><br></br>
									<input type="text" className="form-control" placeholder="Put notes here"></input>
								</li>
								<li className="list-group-item">
									<div className="text-center">Date Saved: 2017/07/12</div>
									<a href="https://www.w3schools.com">Georgia Tech wins National Championship</a>	
									<span type="button" className="pull-right btn btn-primary btn-xs">Remove</span>
									<br></br><br></br>
									<input type="text" className="form-control" placeholder="Put notes here"></input>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>		);
	}
});

// Export the component back for use in other files
module.exports = Saved;
