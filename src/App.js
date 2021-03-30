import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import NotFound from './components/notFound';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './components/common/protectedRoute';
import AdminLogin from './components/adminLogin';
import AdminRegister from './components/adminRegister';
import Admin from './components/admin';

function App() {
  return (
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <ProtectedRoute path='/home' component={Home} flag="user"/>
      <Route path='/admin' exact component={AdminLogin}/>
      <Route path='/admin/register' exact component={AdminRegister}/>
      <ProtectedRoute path='/admin/home' component={Admin} flag="admin"/>
      <Route path='/not-found' component={NotFound}/>
      <Redirect from='/' exact to='/login'/>
      <Redirect to='/not-found'/>
    </Switch>
  );
}

export default App;
