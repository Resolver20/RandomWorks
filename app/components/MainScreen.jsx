import {SafeAreaView,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native'
import Card from './Card'
import React,{useState} from "react";

export function setText(text){
    setText(text)
}
export let text_value='Hello World';
const MainScreen=()=>{
    [text_value,setText]=useState(text_value)
    return(
        <SafeAreaView style={styles.MainScreen}>
            <Text style={{marginBottom:'100%',fontSize:50,fontFamily:'serif'}}>
                {text_value}
            </Text>
            <Card />
        </SafeAreaView>

    )
}
export default MainScreen;
const styles=StyleSheet.create({
    MainScreen:{
        backgroundColor:'grey',
        width:'100%',
        height:'100%',
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:StatusBar.currentHeight,
    },
})