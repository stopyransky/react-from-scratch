import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class TodoLeftbar extends React.Component {

    handleLogout = (e) => {
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(actions.startLogout());
    }

    render() {
        return (
            <div id="todo-leftbar">
                <div className="todo-leftbar-group">
                    <div className="todo-leftbar-item">view1</div>
                    <div className="todo-leftbar-item">view2</div>
                    <div className="todo-leftbar-item">view3</div>
                    <div className="todo-leftbar-item">view4</div>
                    <div className="todo-leftbar-item" onClick={this.handleLogout}>logout</div>
                </div>
                <div className="todo-leftbar-group">
                    <div className="todo-leftbar-item">
                        <a href="https://github.com/stopyransky/get-it-done" target="_blank">
                            <img src="assets/github-48.png" />
                        </a>
                    </div>
                    <div className="todo-leftbar-item">
                        <a href="https://www.facebook.com/m1530" target="_blank">
                            <img src="assets/facebook-48.png" />
                        </a>
                    </div>
                    <div className="todo-leftbar-item">
                        <a href="https://twitter.com/stopyransky" target="_blank">
                            <img src="assets/twitter-48.png" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(TodoLeftbar);