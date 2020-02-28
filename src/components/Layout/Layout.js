import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerOpenedHandler = () => {
        this.setState({
            showSideDrawer: true
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar opened={this.sideDrawerOpenedHandler} />
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    
    }
}
export default Layout;