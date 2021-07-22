import {Signup} from './features/signup'
import {AuthProvider} from './context'
import {HomeComponent} from './features/home'
import {Login} from './features/login'
import {PrivateRoute} from './helpers/private-route'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './styles/main.scss'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomeComponent} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </AuthProvider>
    </Router>

  );
}
export default App;
