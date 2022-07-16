import "./App.css";
import { Route, Switch } from "react-router-dom";
import Actions from "./pages/Actions";
import Login from './pages/Login'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/actions" component={Actions} />
      </Switch>
    </>
  );
}

export default App;
