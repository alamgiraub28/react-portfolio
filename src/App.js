import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div>

<Router>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/login">
      <Login/>
    </Route>
  </Switch>
</Router>
   </div>
  );
}

export default App;
