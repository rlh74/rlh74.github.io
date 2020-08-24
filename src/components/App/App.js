import React, { Component } from 'react';
import About from '../About/About';
import Lissajous from '../Lissajous/Lissajous';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {

    render () {
        return (
            <>
            <Router>
                <div className="navigation">
                    <Link className="nav-link" to="/">Figure</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </div>
            <main>
            <Route exact path = "/" component={Lissajous}/>
            <Route exact path = "/about" component={About}/>
            </main>
            </Router>
            </>
        );
    }
}

export default App;
