import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Pages/Home';
import School from './Pages/School';
import Team from './Pages/Team';
import Whyus from './Pages/Whyus';

class App extends React.Component {

  componentWillMount() {
    //console.log("App::componentWillMount");
    this.setState({
      routes: [
        { path: "/", component: Home, exact: true },
        { path: "/schools", component: School, exact: true },
        { path: "/team", component: Team, exact: true },
        { path: "/whyus", component: Whyus, exact: true }
      ]
    })
  }

  componentDidMount() {
    console.log("App::componentDidMount");
  }
  // <Router>
  //   {this.state.routes.map((route, key) => <Route key={routes.path}
  //     path={routes.path} component={route.component}
  //     exact={routes.exact === true ? true : false}
  //   />)}
  // </Router>
  render() {
    //console.log("App::render");
    return (
      <React.Fragment>
        <Router>
          {this.state.routes.map((route, key) => <Route key={route.path}
            path={route.path} component={route.component}
            exact={route.exact === true ? true : false}
          />)}
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
