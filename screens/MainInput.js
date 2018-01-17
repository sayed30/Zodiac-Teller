import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    AppRegistry,
    TouchableHighlight
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';

export default class MainInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            month: '',
            day: ''
        }
    }

    render() {

        return (

            <
            View style = {
                styles.container
            } >

            <
            Text style = {
                [styles.baseText, styles.titleText]
            } > Month: < /Text>       <
            TextInput style = {
                {
                    height: 40,
                    borderColor: 'white',
                    borderWidth: 2,
                    width: 40,
                    color: "white",
                    textAlign: 'center'
                }
            }
            keyboardType = 'numeric'
            onChangeText = {
                (month) => this.setState({
                    month
                })
            }
            value = {
                this.state.month
            }
            />

            <
            Text style = {
                [styles.baseText, styles.titleText]
            } > Day: < /Text> <
            TextInput style = {
                {
                    height: 40,
                    borderColor: 'white',
                    borderWidth: 2,
                    width: 40,
                    color: "white",
                    textAlign: 'center'
                }
            }
            keyboardType = 'numeric'
            onChangeText = {
                (day) => this.setState({
                    day
                })
            }
            value = {
                this.state.day
            }
            /> <
            TouchableHighlight activeOpacity = {
                0.6
            }
            underlayColor = {
                'blue'
            }
            onPress = {
                () => navigate("Second", {})
            } >


            <
            Text style = {
                styles.button
            } > Submit < /Text> <
            /TouchableHighlight>

            <
            Text > {
                this.state.day
            } < /Text> <
            Text > {
                this.state.month
            } < /Text> <
            /View>

        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'column', // How content in the flexBox will be oriented          
        justifyContent: 'space-between', // Centering the content of flexBox center             
        backgroundColor: 'transparent',
        alignItems: 'center'


    },
    baseText: {
        fontFamily: 'Cochin',

    },


    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
        margin: 0,

    },

    button: {

        fontSize: 30,
        color: 'white',
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: 'stretch',
        textAlign: 'center'
    }

});

AppRegistry.registerComponent('App', () => MainInput);
