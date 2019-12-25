import React, { Component } from 'react';

export default class Header extends Component {
  
    getDay = () => {
      switch (new Date().getDay()) {
          case 0: return "Sunday"
          case 1: return "Monday"
          case 2: return "Tuesday"
          case 3: return "Wednesday"
          case 4: return "Thursday"
          case 5: return "Friday"
          case 6: return "Saturday"
      } 
    }
  
    getMonth = () => {
      switch (new Date().getMonth()) {
        case 0: return "January"
        case 1: return "February"
        case 2: return "March"
        case 3: return "April"
        case 4: return "May"
        case 5: return "June"
        case 6: return "July"
        case 7: return "August"
        case 8: return "September"
        case 9: return "October"
        case 10: return "November"
        case 11: return "December"
      } 
    }
  
    getDate = () => {
      switch (new Date().getDate()) {
        case 1: return "1st"
        case 2: return "2nd"
        case 3: return "3rd"
        default: return new Date().getDate() + 'th'
      }
    }

    counterOfTasks = () => { 
        const {qtyOfTasks} = this.props;
        return `${qtyOfTasks} task${qtyOfTasks <= 1 ? '' : 's'}`
    }
      
    render() {
      return (
        <div className="header">
          <div>
              <div className="mrn-15-30 date">
                {this.getDay()}, {this.getDate()}
              </div>
              <div className="mrn-15-30 date">
                {this.getMonth()}
              </div>
          </div>
          <div>
            <div className="mrn-15-30 counter">
              {this.counterOfTasks()}
            </div>
            <div>
              <input onClick={this.props.clearAllTasks} type="button" value="Clear All" className="btn blue-red mrn-15-30"/>
            </div>
        </div>
      </div>
      );
    }
  }