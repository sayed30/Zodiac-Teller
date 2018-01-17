import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    AppRegistry,
    Component,
    AlertIOS
} from 'react-native';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


import zodiacpic from './zodiacpic.jpg';
import backgroundMain from './backgroundMain.jpg'
export default class ComponentPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            data: ''
        };


    }

    render() {
        var month = this.props.navigation.state.params.month;
        var day = this.props.navigation.state.params.day;

        if (month == 1 && day >= 20) {
            var sign = "Aquarius";
        } else if (month == 2 && day < 18) {
            var sign = "Aquarius";
        } else if (month == 3 && day >= 20) {
            var sign = "Aries";
        } else if (month == 4 && day < 20) {
            var sign = "Aries";
        } else if (month == 6 && day >= 21) {
            var sign = "Cancer";
        } else if (month == 7 && day < 23) {
            var sign = "Cancer";
        } else if (month == 12 && day >= 23) {
            var sign = "Capricorn";
        } else if (month == 1 && day < 20) {
            var sign = "Capricorn";
        } else if (month == 5 && day >= 21) {
            var sign = "Gemini";
        } else if (month == 6 && day < 21) {
            var sign = "Gemini";
        } else if (month == 7 && day >= 23) {
            var sign = "Leo";
        }


        var url = "http://52.205.162.9/que.php?varName=" + sign;

        fetch(url)
            .then((response) => {
                // value = response.JSON.parse(response).data
                // return myData;
                this.setState({
                    data: JSON.stringify(response._bodyText)
                })
            })
            .then((json) => {
                console.log('parsed json', json)
            })
            .catch((ex) => {
                console.log('parsing failed', ex)
            })
            .done();
        // console.log(this.state.data)

        return (

            <Image source = {
                backgroundMain
            }
            style = {
                styles.backgroundImage
            } >
            <View style = {
                [styles.container]
            } >

            <Text style = {
                {
                    color: "white"
                }
            } > 
            {
                sign
            } 
            < /Text> 

            <Text style = {
                {
                    color: "white"
                }
            } > 
            {
                this.state.data.substring(21, this.state.data.length - 5)
            } 
            < /Text>

            <Text style = {
                {
                    color: "white"
                }
            } > 
            {
                month
            } 
            < /Text>


            </View> 
            </Image>
        );

    }
}


AppRegistry.registerComponent('App', () => ComponentPic);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // How content in the flexBox will be o\

        justifyContent: 'space-between', // Centering the content of flexBox\

        backgroundColor: 'transparent',

        alignItems: 'center'

    },
    backgroundImage: {
        flex: 1,

        width: null,
        // or 'stretch',
    },
    button: {

        fontSize: 30,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        textAlign: 'center'
    }
});
