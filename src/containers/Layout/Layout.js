import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerOpenedHandler = () => {
    this.setState({
      showSideDrawer: true,
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar
            opened={this.sideDrawerOpenedHandler}
            isAuth={this.props.isAuthenticated}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
            isAuth={this.props.isAuthenticated}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
