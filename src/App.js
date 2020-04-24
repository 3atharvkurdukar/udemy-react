import React, { Component, Suspense } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Spinner from "./components/UI/Spinner/Spinner";

const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));
const Orders = React.lazy(() => import("./containers/Orders/Orders"));

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthState();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/checkout"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Checkout {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/orders"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Orders {...props} />
              </Suspense>
            )}
          />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthState: () => dispatch(actions.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
