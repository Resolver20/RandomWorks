import React from "react";
import { StyleSheet, SafeAreaView,TouchableHighlight, Text,View ,Button} from "react-native";
import {setText} from './MainScreen';
const Item = (props) => {
    // console.log(obj.value);
  return (
    <SafeAreaView style={styles.Item}>
      <TouchableHighlight onPress={()=>{setText(`Clicked By ${props.id}`)}} style={styles.Button} >
      <Text style={{color:"white"}}>{String(props.value)} </Text>
        </TouchableHighlight>
     </SafeAreaView>
  );
};
export default Item;

const styles = StyleSheet.create({
  Item: {
    width: 70,
    height: '85%',
    borderColor:'white',
    borderWidth:0.5,
    borderRadius:10,
    backgroundColor:'grey',
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  Button:{
    width:'100%',
    height:'100%',
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    borderColor:'white',
  }
});
