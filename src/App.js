import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import EmployeeDetails from './EmployeeDetails';
import { connect } from 'react-redux';
import './App.css';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuth ? <Component {...props} /> :
        <Redirect to="/" />
    )}
  />
)

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/employee-list" component={EmployeeDetails} isAuth={this.props.isAuth} />
        <Redirect to="/" />
      </Switch>
    );
  };
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

export default connect(mapStateToProps, null)(App);
