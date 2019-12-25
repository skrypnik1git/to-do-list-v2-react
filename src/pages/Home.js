import React, { Component }  from 'react';
import TaskInput from '../components/TaskInput'
import Header from '../components/Header'
import TaskContainer from '../components/TaskContainer'
import ModalWindow from '../components/ModalWindow'

class HomePage extends Component {
  state = {
    toDoTasks: [],
    doneTasks: [],
    isModalOpen: false,
  }
 
  getMinutes = () => {
    const currMinutes = new Date().getMinutes()
    return currMinutes < 10 ? String(currMinutes).padStart(2, '0') : currMinutes
  }

  getHours = () => {
    const currHours = new Date().getHours()
    return currHours < 10 ? String(currHours).padStart(2, '0') : currHours
  }

  changeHeight = (e) => {
    if (e.target.value.length < 28 || e.target.value === "") {
        e.target.rows = "1"
    }
    if (e.target.value.length > 28) {
        e.target.rows = "2"
    }
    if (e.target.value.length > 56) {
        e.target.rows = "3"
    }
  }

  addTaskByEnter = (e) => {
    this.changeHeight(e) 
    
    if(e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value.trim()) {
        const {toDoTasks} = this.state
        toDoTasks.push({ text: e.target.value.trim(), time: `${this.getHours()}:${this.getMinutes()}`, index: this.state.toDoTasks.length})
        this.setState({ toDoTasks })
        e.target.value = ""
        this.changeHeight(e) 
      }
    } else if (e.keyCode === 27) {
      e.preventDefault();
      e.target.value = ""
      this.changeHeight(e) 
    }
  }

  addTask = (e) => {
    e.preventDefault()
    if (!e.currentTarget && !e.currentTarget.elements) {
      return false;
    }
    let value = e.currentTarget.elements.task.value;
    if (value.trim()) {
      const {toDoTasks} = this.state
      toDoTasks.push({ text: value.trim(), time: `${this.getHours()}:${this.getMinutes()}`})
      this.setState({ toDoTasks })
      e.currentTarget.elements.task.value = ""
    }
  }

  toDoTask = (e) => {
    const { toDoTasks, doneTasks } = this.state

    const { name } = e.target;

    if (!e.target.checked) {
      const unDoneTask = doneTasks[name]
      doneTasks.splice(name, 1)
      toDoTasks.push(unDoneTask)
    } else {
      const doneTask = toDoTasks[name]
      toDoTasks.splice(name, 1)
      doneTasks.push(doneTask)
    }
    this.setState({toDoTasks, doneTasks})
  }

  clearAllTasks = () => {
    const toDoTasks = []
    const doneTasks = []
    this.setState({ toDoTasks, doneTasks })
  }

  onRemove = (isDone, index) => {
    const removeInfo = { isDone, index }
    this.setState({ removeInfo }, () => this.showModal(true))
  }

  removeTask = ()  => {
    const { toDoTasks, doneTasks, removeInfo } = this.state
    const { isDone, index } = removeInfo;
  
    if (isDone) {
      doneTasks.splice(index, 1)
    } else {
      toDoTasks.splice(index, 1)
    }

    this.setState({toDoTasks, doneTasks}, () => this.showModal(false))
  }

  showModal = isModalOpen => this.setState({ isModalOpen })

  render() {
    const { toDoTasks, doneTasks } = this.state;
    
    return (
      <div className="container">
        <Header 
          qtyOfTasks={toDoTasks.length}
          clearAllTasks={this.clearAllTasks}
        />
        <TaskInput
          addTask={this.addTask}
          addTaskByEnter={this.addTaskByEnter}
        />
        <TaskContainer 
          toDoTasks={toDoTasks}
          doneTasks={doneTasks}
          toDoTask={this.toDoTask}
          removeTask={this.onRemove}
        />
         <ModalWindow 
            isOpen={this.state.isModalOpen}
            onConfirm={this.removeTask}
            onClose={() => this.showModal(false)}
          />
      </div>
    )
  }
}

export default HomePage