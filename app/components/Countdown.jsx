var React = require('react');
var Clock = require('Clock');
var CountdownForm = require("CountdownForm");
var CountdownControls = require("CountdownControls");

var Countdown = React.createClass({
	
	getInitialState : function() {
		return { 
			count : 0, 
			countdownStatus: 'stopped'
		}
	},

	handleSetCountdown : function( seconds ) {
		this.setState( {
			count : seconds,
			countdownStatus :'started'
		});
	},
	
	handleStatusChange : function( newStatus ) {
		this.setState({
			countdownStatus : newStatus
		});
	},
	
	componentDidUpdate : function( prevProps, prevState ) {
		if(this.state.countdownStatus !== prevState.countdownStatus ) {
			switch(this.state.countdownStatus) {
				case 'started' : 
					this.startTimer();
					break;
				case 'stopped' :
					this.setState({count: 0});
				case 'paused' :
					clearInterval(this.timer);
					this.timer = null;
					break; 
			}
		}
	},
	componentWillUnmount : function ( ) {
		clearInterval(this.timer);
		this.timer = null;
	},

	startTimer : function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count : newCount >= 0 ? newCount : 0
			});

		if(newCount === 0) {
			this.setState({countdownStatus: 'stopped'});
		}

		}, 1000);
	},


	render: function() {
		var { count, countdownStatus } = this.state;

		var renderControlArea = () => {
			if( countdownStatus !== 'stopped' ) {
				return <CountdownControls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		};

		return (
			<div>
				<h1 className ="page-title text-center">Countdown</h1>
				<Clock totalSeconds={count}/>
				{ renderControlArea() }
			</div>
		);
	}
})

module.exports = Countdown;