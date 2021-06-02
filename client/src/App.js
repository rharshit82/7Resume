import './App.css';
import ResumeScreen from './screens/resumeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ResumeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
