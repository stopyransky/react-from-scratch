var expect=require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import * as actions from 'actions';
import {TodoItem} from 'TodoItem';

describe("TodoItem", () => {

	it("should exist", () => {
		expect(TodoItem).toExist();
	});

	it("should dispatch TOGGLE_TODO action on click", () => {
		var todoData = {
			id : 199,
			text : "Write TodoItem.test.jsx test",
			completed : true
		};
		var action = actions.startToggleTodo(todoData.id, !todoData.completed);
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy} />);

		var $el = $(ReactDOM.findDOMNode(todo));


		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	// it("should call onToggle prop with id on click", () => {
	// 	var todoData = {
	// 		id : 199,
	// 		text : "Write TodoItem.test.jsx test",
	// 		completed : true
	// 	};
	// 	var spy = expect.createSpy();
	// 	var todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy} />);

	// 	var $el = $(ReactDOM.findDOMNode(todo));


	// 	TestUtils.Simulate.click($el[0]);

	// 	expect(spy).toHaveBeenCalledWith(199);
	// });
});
