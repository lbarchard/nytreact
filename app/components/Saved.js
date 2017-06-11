// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var SavedItem = require("./SavedItem");

var Saved = React.createClass({

	getInitialState: function() {
		return {};
	},
	renderSavedItems: function() {
		console.log("==========")
		console.log(this.props.savedArticles)
		if (this.props.savedArticles === []) {
			return
		}
		else {
			var list = this.props.savedArticles.map(function(row, index){
				return (
					<SavedItem key={row._id} savedArticle={row}/>
				)
			})
			return <div>{list}</div>	   
		}
	},

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

module.exports = Saved;
