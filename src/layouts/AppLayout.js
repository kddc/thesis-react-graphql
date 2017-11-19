import React, { Component } from 'react'
import logo from '../codetalks.png'
import { Link } from 'react-router-dom'

class AppLayout extends Component {

  render() {
    return (
      <div>
        <div className="app-header">
          <div className="container app-nav">
            <img src={logo} className="app-logo" alt="logo" />
            <Link to="/">Top</Link>
            <Link to="/ask">Ask</Link>
          </div>
        </div>
        <div className="container">
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default AppLayout
