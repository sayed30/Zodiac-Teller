import React from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions,AppRegistry } from 'react-native';



import zodiacpic from './zodiacpic.jpg';
export default class ComponentPic extends React.Component {
    constructor(){
	super()
	    this.state ={

	    backgroundColor:'blue'
	    
	}

	this.changeColor = this.changeColor.bind(this)
    }
    changeColor(backgroundColor){

	this.setState({backgroundColor})


	    }
        render(){
	    const {backgroundColor} = this.state
	return (
           
		<View style={[styles.container,{backgroundColor:this.state.backgroundColor}]}>
			     <Text style = {styles.button} onPress ={()=>this.changeColor('green')}>green</Text>
			     </View>
		);

    }
}


AppRegistry.registerComponent('App', () => ComponentPic);

    const styles = StyleSheet.create({
	    container: {
		flex:1,
		flexDirection:'column',     // How content in the flexBox will be o\
                                                                         
		justifyContent:'space-between', // Centering the content of flexBox\
                                                                          
		backgroundColor: 'black',

		alignItems: 'center'

	    },
	    button:{

		fontSize:30,
		margin: 10,
		padding:10,
		borderWidth:2,
		borderRadius:10,
		alignSelf:'stretch',
		textAlign: 'center' 
	    }
	});