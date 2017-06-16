var React = require("react");
var ReactDOM = require("react-dom")

var ResultsItem = React.createClass({
	getInitialState: function() {
		return {};
	},

	saveItem: function(event) {
		var title = this.props.article.title
		axios.post('/saved',
			{
			'title': this.props.article.title,
			'link': this.props.article.web_url,
			'date': '2017-07-10'
			}
		)
		.then(function (response) {
			this.props.getSavedArticles()
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		});
	},

	render: function() {
		return (
			<li key={this.props.article.key} className="list-group-item">
				<a href={this.props.article.web_url}>{this.props.article.title}</a>		
				<span onClick={this.saveItem} type="button" className="pull-right btn btn-primary btn-xs">Save</span>
			</li>
		);
	}
});

module.exports = ResultsItem;
