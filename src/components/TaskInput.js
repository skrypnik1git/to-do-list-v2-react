import React, { Component } from 'react'

export default class TaskInput extends Component {
  
    render() {
      return (
        <form onSubmit={this.props.addTask} className="input-div"> 
          <textarea 
            onKeyDown={this.props.addTaskByEnter}
            className="text-area"
            name="task" type="text"
            placeholder="Put your task here"
            rows="1"
          >
          </textarea>
          <input className="btn blue-btn" name="submit_btn" type="submit" value="Add"></input>
        </form>
      )
    }
  }