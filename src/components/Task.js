import React, { Component } from 'react';
import closeImg from '../static/images/close.png'

export default class Task extends Component {
    onDelete = () => {
        const { checked, index, removeTask } = this.props;
        removeTask(checked, index)
    }

    render() {
        const { checked,toDoTask,index,text,time  } = this.props;
        console.log(text, ' Checled: ', checked)
        return (
            <div className={`task ${ checked ? 'checked' : ''}`}>
                <input
                    type="checkbox"
                    onChange={toDoTask} 
                    name={index} 
                    className="input"
                    checked={checked}
                >
                </input>
                <p className="task-text">
                    {text}
                </p>
                <p>
                    {time}  
                </p>
                <img src={closeImg} className="closing-icon" onClick={this.onDelete}>
                </img>
            </div>
        )
    }
}