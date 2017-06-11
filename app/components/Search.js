var React = require("react");
var ReactDOM = require("react-dom")

var Search = React.createClass({
	getInitialState: function() {
		return {
			topic: "",
			start: "",
			end: ""
		};
	},

	searchButton: function (event) {
		this.props.search(this.state.topic, this.state.start, this.state.end)
	},

	topicChange: function (event) {
		this.setState({topic: event.target.value});
	},
	startChange: function (event) {
		this.setState({start: event.target.value});
	},
	endChange: function (event) {
		this.setState({end: event.target.value});
	},

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
								<input id="topic" onChange={this.topicChange} type="text" className="form-control" id="topic" value={this.state.topic} placeholder="Type your search here"></input>
							</div>
							<div className="form-group">
								<label>Start Date</label>
								<input id="start" onChange={this.startChange} type="date" className="form-control" id="topic" value={this.state.start} placeholder="Start Date"></input>
							</div>
							<div className="form-group">
								<label>End Date</label>
								<input id="end" onChange={this.endChange} type="date" className="form-control" id="topic" value={this.state.end} placeholder="End Date"></input>
							</div>
							<button onClick={this.searchButton} type="button" className="btn btn-default">Search</button>
						</form>
					</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Search;
