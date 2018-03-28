import React, {Component} from 'react';
import Login              from './components/Authenticate/Login';
import Register           from './components/Authenticate/Register';
import Header             from './components/Header/Header';
import Navigation         from './components/Navigation/Navigation';
import HomePage           from './components/HomePage/HomePage';
import {
    Grid,
    Tab
}                         from 'semantic-ui-react';

const panes = [
    {menuItem : 'Login', render: () => <Tab.Pane><Login/></Tab.Pane>},
    {menuItem : 'Register', render: () => <Tab.Pane><Register/></Tab.Pane>}
];

class App extends Component {
    render() {
        return (
            <div className="page">
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Tab panes={panes}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Header/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Navigation/>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <HomePage/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
