import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import React from 'react';
import moment from 'moment';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    ;
  }
}