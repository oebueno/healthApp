import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
//import {createStackNavigator} from 'react-navigation';

import Component5 from './app/components/Component5/Component5'
//import Component6 from './app/components/Component6/Component6'

// const App = createStackNavigator({
//     Home: { screen: HomeScreen },
//     Profile: { screen: ProfileScreen}
// });


export default class app extends Component{
    renderScene(route, navigator){
        switch(route.id){
            case 'component5' : 
                return (<Component5 navigator={navigator} title="component5" />)
            case 'component6' : 
                return (<Component6 navigator={navigator} title="component6" />)
        }
    }

    render(){        
        return(
            <View>
                <Component5 />
            </View>
            
        )
    }
}

AppRegistry.registerComponent('app', () => app)