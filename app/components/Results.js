var React = require("react");
var ReactDOM = require("react-dom")

var ResultsItem = require("./ResultsItem");

var Results = React.createClass({

	getInitialState: function() {
		return {};
	},

	renderResultItems: function() {
		if (this.props.searchedArticles === []) {
			return
		}
		else {
			var list = this.props.searchedArticles.map(function(row, index){
				return (
					<ResultsItem getSavedArticles={this.props.getSavedArticles} key={index} article={row}/>
				)
			}.bind(this))
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
