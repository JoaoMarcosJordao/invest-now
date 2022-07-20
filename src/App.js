import "./App.css";
import { Route, Switch } from "react-router-dom";
import Actions from "./pages/Actions";
import Login from './pages/Login'
import BuyOrSell from './pages/BuyOrSell';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/actions" component={Actions} />
      <Route path="/buyorsell" component={BuyOrSell} />
    </Switch>

  );
}

export default App;
