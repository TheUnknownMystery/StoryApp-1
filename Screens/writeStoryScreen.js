import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Header2 from "../components/Header2"
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class WriteStoryScreen extends React.Component {
 render() {
  return (

   <View>

    <Header2 />
    <TextInput

     style={styles.textInputStyle}
     placeholder='Author of this story'

    />

    <TextInput

     style={styles.textInputStyle}
     placeholder='Title'

    />

     <TextInput

     style={styles.textInputStyle2}
     placeholder='WriteStoryHere'

    />
    
    <TouchableOpacity style = {{borderWidth: 2,borderRadius: 20,backgroundColor: 'red',alignSelf: 'center',marginTop: 70}}>

     <Text style ={{fontWeight: 'bold',fontSize: 40}}>Submit</Text>

    </TouchableOpacity>
   </View>
  )
 }
}
const styles = StyleSheet.create({

 textInputStyle: {

  borderWidth: 4,
  justifyContent: 'center',
  width: '40%',
  height: 50,
  alignSelf: 'center',
  marginTop: 50
 },
 
 textInputStyle2:{

 height: 200,
 width: '40%',
 alignSelf: 'center',
 marginTop: 50,
 borderWidth: 7
 }
})