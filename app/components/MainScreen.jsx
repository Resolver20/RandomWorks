import {SafeAreaView,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native'
import Card from './Card'
import React from "react";

const MainScreen=()=>{
    return(
        <SafeAreaView style={styles.MainScreen}>
            <Card />
        </SafeAreaView>

    )
}
export default MainScreen;
const styles=StyleSheet.create({
    MainScreen:{
        backgroundColor:'yellow',
        width:'100%',
        height:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop:StatusBar.currentHeight,
    },
})