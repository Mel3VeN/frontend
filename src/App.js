import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './themes/globalStyles';
import Dashboard from './components/dash/Dashboard';
import Browse from './components/browse/Browse';
import Overview from './components/program/Overview';
import Workout from './components/Workout/Workout';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/browse" component={Browse} />
          <Route path="/program/:slug/workout/:number" component={Workout} />
          <Route path="/program/:slug" component={Overview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
