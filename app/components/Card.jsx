import React from 'react';
import {StyleSheet,SafeAreaView,Text,View} from 'react-native';
// import DescriptionBox from './DescriptionBox';
import Item from './Item';

const Card=()=>{
    let values=[];
    for(let i=0;i<4;i++){
        values.push({id:i+1})
    }
    let dummy=[1,2,3];
    return(
        <SafeAreaView style={styles.Card}>
            {
            values.map((current_value,i,arr)=>{
                return( <Item value={current_value.id} id={i+1} /> );
            })
            }
        </SafeAreaView>
    )
}
export default Card;
const styles=StyleSheet.create({
    Card:{
        width:'100%',
        height:60,
        // marginBottom:10,
        backgroundColor:'grey',
        // borderRadius:10,
        borderTopColor:'black',
        borderTopWidth:0.2,
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        // justifyContent:'center',
        alignItems:'center'
    },
});
