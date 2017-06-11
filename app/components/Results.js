var React = require("react");
var ReactDOM = require("react-dom")

var ResultsItem = require("./ResultsItem");

var Results = React.createClass({

	getInitialState: function() {
		return {};
	},

	renderResultItems: function() {
		if (this.props.articles === []) {
			return
		}
		else {
			var list = this.props.articles.map(function(row, index){
				return (
					<ResultsItem key={index} article={row}/>
				)
			})
			return <div>{list}</div>	   
		}
	},
	
	render: function() {
		return (
			<div id="query" className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body">
					<ul className="list-group">
						{this.renderResultItems()}
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Results;
