import React, { Component } from 'react';
import Task from './Task'

export default class TaskContainer extends Component {
  
  doneTasksContainer = () => {
    if (this.props.doneTasks.length > 0) {
      return this.props.doneTasks.map((task, idx) => {
        return <Task 
                  key={idx}
                  text={task.text}
                  time={task.time}
                  index={idx}
                  toDoTask={this.props.toDoTask}
                  removeTask={this.props.removeTask}
                  checked={true}
                />
      }  )
    }
  }
  
  render() {
      return (
        <div className="tasks">
          {this.props.toDoTasks.map((task, idx) => {
            return <Task 
                      key={idx}
                      text={task.text}
                      time={task.time}
                      index={idx}
                      toDoTask={this.props.toDoTask}
                      removeTask={this.props.removeTask}
                      checked={false}
                    />
          }  )}
          <div className={`${ this.props.doneTasks.length > 0 ? 'done-tasks' : 'hidden'}`}>
            {this.doneTasksContainer()}
          </div>
        </div>
        
        

      )
    }
  }
  