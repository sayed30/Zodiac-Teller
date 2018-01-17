import React from 'react';
import {
    TextInput,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
    Dimensions
} from 'react-native';
const {
    width,
    height
} = Dimensions.get('window');
import zodiacpic from './zodiacpic.jpg';
import backgroundMain from './backgroundMain.jpg'
import {
    StackNavigator
} from 'react-navigation';


// First screen when app is opened
export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'First screen'

    }
    constructor(props) {
        super(props);
        this.state = {
            score: '1',
            text: 'Place holder text',
            month: '',
            day: ''
        }


    }

    render() {
        var {
            navigate
        } = this.props.navigation;


        return (

            <
            Image source = {
                backgroundMain
            }
            style = {
                styles.backgroundImage
            } >
            <
            View style = {
                styles.container
            } >
            <
            StatusBar hidden = {
                true
            }
            /> <
            Text style = {
                [styles.baseText, styles.titleText]
            } > Zodiac Teller! < /Text>            <
            Text style = {
                [styles.baseText, styles.titleText]
            } > Enter a Birthday: < /Text>  <
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
                    textAlign: 'center',
                    backgroundColor: '#2c67a5'
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
                    textAlign: 'center',
                    backgroundColor: '#2c67a5'
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
            />



            <
            TouchableHighlight onPress = {
                () => {
                    const {
                        navigate
                    } = this.props.navigation;
                    navigate('Second', {
                        month: this.state.month,
                        day: this.state.day
                    });
                }
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
            } < /Text>

            <
            Image style = {
                styles.pic
            }
            source = {
                zodiacpic
            }
            />	               

            <
            /View> <
            /Image>
        );

    }
}

// Flex is important to parent and children relationship.
// The axis matters too, row vs Colums etc
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // How content in the flexBox will be oriented
        backgroundColor: 'transparent',

        alignItems: 'center',
        width: width * 0.98, // 80% of screen's width
        height: height * 0.98 // 20% of screen's height

    },
    pic: {
        flex: 2,
        flexDirection: 'column',
        borderRadius: 100,
        resizeMode: 'stretch',
        width: width * 0.50,
        height: height * 0.30
    },
    backgroundImage: {
        flex: 1,

        width: null,
        // or 'stretch',
    },

    baseText: {
        fontFamily: 'Cochin',

    },


    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
        margin: 5,
        borderWidth: 0
    },
    button: {
        backgroundColor: '#2c67a5',
        fontSize: 30,
        color: 'white',
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        alignSelf: 'stretch',
        textAlign: 'center'
    }

});
