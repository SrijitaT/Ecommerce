import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemList from "./components/pages/itemList";
import Header from "./components/pages/header";

/*function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={ItemList} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}*/
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Header/>
      <ItemList/>
      </div>
    );
  }
}

export default App;
