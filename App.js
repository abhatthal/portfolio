// Routing
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Components
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
// Assets
import './assets/css/fonts.css';
import './assets/css/App.css';
import logo from './assets/logo.svg';


function App() {
  return (
    <Router>
      <div className="navigation-bar">
        <img src={logo} className="logo" alt="abhatthal" />
        <ul className="navigation">
          <li><Link to="/" className="item">Projects</Link></li>
          <li><Link to="/articles" className="item">Articles</Link></li>
          <li><Link to="/about" className="item">About</Link></li>
        </ul>
      </div>

      <Switch>
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/" component={Projects} />
      </Switch>

      <p>Hello! My portfolio isn't quite done yet.
        If you'd like to see some of my work, check out my <a href="https://www.github.com/abhatthal">GitHub</a>!</p>
    </Router>

  );
}

export default App;
