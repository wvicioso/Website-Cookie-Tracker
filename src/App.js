import React, { Component } from 'react';
import logo from './MH-S4-Logo.png';
import './App.css';
import { Modal, Button, Circle } from './components/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      circleColor: "",
      impressionCount: 0
    }
  }

  componentDidMount() {
    this.handleCookies();
  }

  handleCookies(){
    this.checkCookies()
    .then(response => {
      if (response.exists) {
        this.updateImpressionCount();
      } else {
        this.assignCircleColor();
        this.setInitialImpressionCount();
      }
    })
  }

  async checkCookies() {
    if (document.cookie) {
      let cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
        let cookieObj = cookies[i].split("=");
        if (cookieObj[1]) {
          this.setState({
            [cookieObj[0]]: cookieObj[1]
          });
        }
      }
      return { exists: true }
    }
    return { exists: false }
  }

  assignCircleColor() {
    let randInt = Math.floor(Math.random() * 2),
        color = "blue";
    if (randInt === 1) { color = 'red'; }
    document.cookie = `circleColor=${color};`;
    this.setState({
      circleColor: color
    });
  }

  setInitialImpressionCount() {
    document.cookie = "impressionCount=1;";
    this.setState({
      impressionCount: 1
    });
  }

  updateImpressionCount() {
    let oldImpressionCount = parseInt(this.state.impressionCount);
    let newImpressionCount = oldImpressionCount + 1;
    this.setState({
      impressionCount: newImpressionCount
    });
    document.cookie = `impressionCount=${newImpressionCount};`;
  }

  delete_cookies() {
    let cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
      let cookieObj = cookies[i].split("=");
      document.cookie = `${cookieObj[0]}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
    alert('All cookies deleted');
    this.handleCookies();
  }

  render() {
    let color = (this.state.circleColor === 'blue' ? '#2196f3' : '#f44336')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Mighty Hive logo" />
          <h1>Technical Solutions Engineer - Challenge</h1>
        </header>

        <Modal  width={300} height={300}>
          <Modal width={200} height={100} title="Impressions:" value={this.state.impressionCount} />
          <Modal width={200} height={100} title="Active color:" value={this.state.circleColor} />
          <Button action={this.delete_cookies.bind(this)} name={'Clear Cookies'} />
        </Modal>

        <Modal  width={300} height={300}>
          <Circle color={color} />
        </Modal>
      </div>
    );
  }
}

export default App;
