var React = require("react");
var ReactDOM = require("react-dom")

var SavedItem = React.createClass({

	getInitialState: function() {
		return {
		};
	},

	deleteItem: function(event) {
		var id = this.props.savedArticle._id
		axios.delete('/saved/' + id,{})
		.then(function (response) {
			this.props.getSavedArticles()
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		});
	},

	render: function() {
		return (
			<li key={this.props.key} className="list-group-item">
				<div className="text-center">{this.props.savedArticle.date}</div>
				<a href={this.props.savedArticle.link}>{this.props.savedArticle.title}</a>		
				<span type="button" onClick={this.deleteItem} id={this.props.savedArticle._id} className="pull-right btn btn-primary btn-xs">Remove</span>
			</li>
		);
	}
});

module.exports = SavedItem;
