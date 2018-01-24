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
import DatePicker from 'react-native-datepicker'

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
            day: '',
            date: ''
        }

    }
 

    render() {
        var {
            navigate
        } = this.props.navigation;

        var month = this.state.date.substring(5,7);
        var day = this.state.date.substring(8,10);
        return (

            <Image source = {
                backgroundMain
            }
 				style = {
                styles.backgroundImage
            }>
            <View style = {
                styles.container
            }>
            <StatusBar hidden = {
                true
            }/> 
            <Text style = {
                [styles.baseText, styles.titleText]
            } > Zodiac Teller! < /Text> 

            <Text style = {
                [styles.baseText, styles.titleText]
            } > Enter a Birthday:< /Text>  
    
        <DatePicker style={styles.calendar}
          onDateChange={(date) => {this.setState({date: date})}}
          value={this.state.date}


          confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={zodiacpic}

          
        />
      
         <TouchableHighlight onPress = {
                () => {
                    const {
                        navigate
                    } = this.props.navigation;
                    navigate('Second', {
                        month: month,
                        day: day
                    });
                }
            } >
            <Text style = {
                styles.button
            } > Submit < /Text> 
            < /TouchableHighlight >
            


            <Text > {
                day
            } < /Text> 
            <Text > {
                this.state.date
            } < /Text> 
            <Text > {
               month
            } < /Text>

            <Image style = {
                styles.pic
            }
            source = {
                zodiacpic
            }
            />	               

            </View> 
				< /Image >
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

    calendar: {
        width:300,
        backgroundColor:"white",
        borderWidth:20
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
        margin: 70,
        padding: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        alignSelf: 'stretch',
        textAlign: 'center'
    }

});
