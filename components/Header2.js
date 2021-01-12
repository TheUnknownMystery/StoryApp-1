import * as React from 'react'
import { View, Text, StyleSheet,TextInput } from 'react-native'

class Header2 extends React.Component {
 render() {
  return (

   <View style={styles.blueBar}>
    <Text style={styles.header}>WritingScreen</Text>
   </View>
  )
 }
}

const styles = StyleSheet.create({

 header: {

  backgroundColor: 'blue',
  fontWeight: 'bold',
  alignSelf: 'center',
  fontSize: 40,
  marginTop: 30
 },
 
 blueBar:{

 backgroundColor: 'blue'


 }
})

export default Header2