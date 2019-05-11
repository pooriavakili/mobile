import {
    View,
    Text,
    StyleSheet
}from 'react-native'
import React,{Component} from 'react'
export default class Biography extends Component{
    render(){
        return(
            <View>
                <Text>salam</Text>
            </View>
        )
    }
}
const Style=StyleSheet.create({
    Container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
