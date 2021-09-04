import React from 'react';
import {StyleSheet,SafeAreaView,Text} from 'react-native';
const Card=()=>{
    return(
        <SafeAreaView style={styles.Card}>
            <Text style={styles.Heading}>
                Hello
            </Text>
        </SafeAreaView>
    )
}
export default Card;
const styles=StyleSheet.create({
    Card:{
        width:'100%',
        height:100,
        backgroundColor:'pink',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Heading:{
        color:'black',
        top:10,
        fontSize:20,
    },
});
