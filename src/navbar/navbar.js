import React, { Component } from 'react';
import styles from './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Home = () => <h1>Home</h1>
const About = () => <h1>Home</h1>
const Topics = () => <h1>Home</h1>
const BodySection = () => <h1>Home</h1>

class NavBar extends Component {

  render() {
    return (
      <div className="nav-bar-container top-level-nav">
        <div className="navbar">

          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">OPEN MIC</a>
              </div>
<Router>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to="/">Home</Link><span className="sr-only">(current)</span></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/about">News</Link></li>
                </ul>


                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>

              </div>

</Router>

            </div>
          </nav>

        </div>
      </div>
    );
  }
}

export default NavBar;
