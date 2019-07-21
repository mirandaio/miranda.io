import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import animateVines from './vines';

class App extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    animateVines(this.canvasRef.current);
  }

  render() {
    return (
      <Router>
        <Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="canvas-container">
              <canvas ref={this.canvasRef} />
            </div>
          </nav>
          <section className="container">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </section>
        </Fragment>
      </Router>
    );
  }
}

export default App;
