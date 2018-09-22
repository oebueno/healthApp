import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';


export default class Component3 extends Component{
        constructor(){
        super();
        this.state = {
            textValue: 'Hello'
        }
    }
    onChangeText(value){
        this.setState({
            textValue: value,
            switchValue: false
        });
    }
    onSubmit(){
        console.log("Input submitted");
    }
    onSwitch(value){
        this.setState({
            switchValue: value
        })
    }
    render(){
        return(
            <View style={{borderTopWidth: 100}}>
                <TextInput
                    placeholder="Enter Text"
                    value = {this.state.textValue}
                    onChangeText = { (value) => this.onChangeText(value)}
                    onSubmitEditing = {this.onSubmit}
                />  
                <Text>{this.state.textValue}</Text>
                <Switch
                    value={this.state.switchValue}
                    //onValueChange={(value) => this.onSwitch(value)}
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('Component3', () => Component3)