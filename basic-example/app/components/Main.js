var React = require('react');
var ProgressBar = require('react-progressbar.js');
var SemiCircle = ProgressBar.SemiCircle;

var Main = React.createClass({
	getInitialState:function(){
		return {
			progress: 1
		}
	},
	// handleChange:function(){
	// 	this.setState({
	// 		progress: (this.state.progress + .1)
	// 	});
	// },
	render:function render() {

		if (this.state.progress == 1) {
			var options = {
				strokeWidth:2,
				color: '#42f445'
			};
		}
		else if (this.state.progress < 1 && this.state.progress >= .5) {
			var options = {
				strokeWidth:2,
				color: '#fb1'
			};
		}
		else {
			var options = {
				strokeWidth:2,
				color: '#f44242'
			};
		}

		var containerStyle = {
			width:'300px',
			height:'150px'
		};

		return (
			<div>
				<SemiCircle
					progress = {this.state.progress}
					text={(this.state.progress * 100) + "%"}
					options={options}
					initialAnimate={true}
					containerStyle={containerStyle}
					containerClassName={'.progressbar'}
				/>
			</div>
		);
	}
});

module.exports = Main;