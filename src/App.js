import React, { Component } from 'react';
import { Modal, Button, Circle } from './components/index.js';
import './App.css';

  const COLORS = {
    green: ['#4caf50', 'Green'],
    yellow: ['#ffeb3b', 'Yellow'],
    purple: ['#9c27b0', 'Purple'],
    blue: ['#2196f3', 'Blue'],
    red: ['#f44336', 'Red'],
    none: ['#fff', ''],
  }


class App extends Component {
  constructor() {
    super();
    this.state = {
      circleColor: 'none',
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
      let cookies = document.cookie.split('; ');
      for (let i = 0; i < cookies.length; i++) {
        let cookieObj = cookies[i].split('=');
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
    let randInt = Math.floor(Math.random() * 4),
        color = '#fff'
        switch (randInt) {
          case 0:
            color = 'green';
            break;
          case 1:
            color = 'yellow';
            break;
          case 2:
            color = 'purple';
            break;
          case 3:
            color = 'blue';
            break;
          case 4:
            color = 'red';
            break;
          default:
            color = '#fff';
        }

    document.cookie = `circleColor=${color};`;
    this.setState({
      circleColor: color
    });
  }

  setInitialImpressionCount() {
    document.cookie = 'impressionCount=1;';
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
    for (let i = 0; i < cookies.length; i++) {
      let cookieObj = cookies[i].split('=');
      document.cookie = `${cookieObj[0]}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
    alert('All cookies deleted');
    this.handleCookies();
  }

  render() {
    let color = COLORS[this.state.circleColor]
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Website Cookie Tracker</h1>
          <p>
            When you first visit this site, 1 of 5 colors will be displayed. A cookie will be created to track which color was displayed.
            Every subsequent visit will only display the color that was persisted during your first visit.
            This site will also count the number of times you have seen the color. To reset/clear all cookies, click the button below.
          </p>
        </header>

        <Modal  width={300} height={300}>
          <Modal width={200} height={100} title='Impressions:' value={this.state.impressionCount} />
          <Modal width={200} height={100} title='Active color:' value={color[1]} />
          <Button action={this.delete_cookies.bind(this)} name={'Clear Cookies'} />
        </Modal>

        <Modal  width={300} height={300}>
          <Circle color={color[0]} />
        </Modal>
      </div>
    );
  }
}

export default App;
