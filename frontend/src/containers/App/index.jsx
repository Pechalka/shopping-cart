import React, { Component } from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Navigation from './Navigation';


class App extends Component {
    componentDidMount() {
        this.props.appStart();
    }

    render() {
        return (
            <div>
                <Layout>
                    <Layout.Header>
                        <Header>
                            <Header.Logo />
                            <Header.Nav>
                                <Navigation />
                            </Header.Nav>
                        </Header>
                    </Layout.Header>
                    <Layout.Main>
                        {this.props.children}
                    </Layout.Main>
                    <Layout.Footer>
                        footer
                    </Layout.Footer>
                </Layout>
            </div>
        );
    }
}

import { appStart } from './state';
import { connect } from 'react-redux';

export default connect(
    null,
    { appStart }
)(App);
