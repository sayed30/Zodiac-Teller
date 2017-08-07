import React from 'react';
import { View,TextInput,StyleSheet, Text, AppRegistry} from 'react-native';

export default class MainInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            text:'',
	    text2:''
        }


    }

    render(){

        return(

	       <View style={styles.container}>
	      <Text style={[styles.baseText,styles.titleText]}> Month: </Text>
               
	    <TextInput
	       style={{height: 40, borderColor: 'white', borderWidth: 2, width:40}}
            
               keyboardType = 'numeric'
	       onChangeText={(text) => this.setState({text})}
	       value={this.state.text}
               />
	      <Text style={[styles.baseText,styles.titleText]}> Day: </Text>
	      <TextInput
	      style={{height: 40, borderColor: 'white', borderWidth: 2, width:40}}
             
               keyboardType = 'numeric'
	      onChangeText={(text2) => this.setState({text2})}
	      value={this.state.text2}
               />

	      </View>
              	       
	    );
    }
}

const styles = StyleSheet.create({
container: {
    flex:1,
        height: 40,
	flexDirection:'row',     // How content in the flexBox will be oriented             
	justifyContent:'space-between', // Centering the content of flexBox center             
	backgroundColor: 'transparent',
	alignItems: 'center'
        

},
baseText: {
	    fontFamily: 'Cochin',

},


titleText: {
	    fontSize: 20,
	    fontWeight: 'bold',
	    color:'white',
	    padding: 20,
	    margin:0,
	   
}

    });

AppRegistry.registerComponent('App', () => MainInput);