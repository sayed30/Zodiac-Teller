import React from 'react';
import { TextInput,StatusBar,StyleSheet, Text, TouchableHighlight, View,Image,Dimensions } from 'react-native';
import MainInput from './MainInput'
import zodiacpic from './zodiacpic.jpg';
import backgroundMain from './backgroundMain.jpg'
export default class App extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    score:'1',
	    text:'Place holder text'

	}
	
	
    }    
    render(){
      
	return( 
	           
	       <Image source ={backgroundMain} style={styles.backgroundImage}>
	       <View style={styles.container}>
	    <StatusBar hidden={true}/>
	       <Text style={[styles.baseText,styles.titleText]}>Zodiac Teller!</Text>           
	       <Text style={[styles.baseText,styles.titleText]}>Enter a Birthday: </Text> 

	       < MainInput />
	       <TouchableHighlight
	       activeOpacity={0.6}
	       underlayColor={'blue'}
	       onPress={() => this.setState({score: ++this.state.score})}>
	       
	     
	       <Text style={styles.button}>Submit</Text>
	       </TouchableHighlight>
	       <Text>{this.state.score}</Text>

           <Image style={styles.pic} source ={zodiacpic}/>
	   
	        
	   
	       </View>
	     </Image>
		);
 
    }
}

// Flex is important to parent and children relationship.
// The axis matters too, row vs Colums etc

const styles = StyleSheet.create({
  container: {
      flex:1,
	    flexDirection:'column',     // How content in the flexBox will be oriented
	    justifyContent:'space-between', // Centering the content of flexBox center
	    backgroundColor: 'transparent',
      
            alignItems: 'center'

  },
  pic:{
	    
	    borderRadius:100,
	    // resizeMode:''
	    width: 200, height: 200
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
	      color:'white',
	      padding: 20,
	      margin:5,
	      borderWidth:0
	  },
  button:{

            fontSize:30,
	    color:'white',
            margin: 10,
            padding:10,
            borderWidth:2,
	    borderColor:'white',
            borderRadius:10,
            alignSelf:'stretch',
            textAlign: 'center'
  }
     
});
