import React from 'react';
import {connect} from "react-redux";
import * as actions from 'actions';
import * as _ from 'lodash';
import moment from 'moment';

export class TodoAdd extends React.Component {

	onFormSubmit( e ) {
		e.preventDefault();

		var { dispatch } = this.props;
		var tagsRef = this.refs.tags.value.split(",");
		var tags = [];
		
		
		if(tagsRef.length > 0) {
			
			tagsRef.forEach( ( tag )=> {
				var t = tag.trim();
				if(t) tags.push(t);
			});
		}

		// check due date input here
		
		var newTodo = {
			text: _.capitalize(this.refs.text.value),
			dueDate : moment(this.refs.dueDate.value, "YYYY-MM-DD").unix(),
			tags 
		} 

		if(newTodo.text.length > 0) {
			this.refs.text.value = "";
			this.refs.dueDate.value="";
			this.refs.tags.value="";
			dispatch(actions.startAddTodo(newTodo))
		} else {
			this.refs.text.focus();
		}
	}

	render() {
		return (
			<div id="todoAddForm" 
				className="columns large-8 medium-6 small-12">
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type='text' ref='text' placeholder="Enter new todo..."/>
					<input type='date' ref='dueDate'/>
					<input type="text" ref='tags' />
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default connect()(TodoAdd);