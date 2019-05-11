import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";
import React,{Component} from 'react'
export default class Search extends Component{
    render(){
        return(
            <View style={style.Container}>
                <TextInput
                placeholder='Search'
                placeholderTextColor='black'
                />
                <View
                style={{
                    backgroundColor:"green",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20
                }}
                >
                    <TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontSize:20,
                            fontWeight: "bold",
                            color:'white'
                        }}
                        >Search</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
const style=StyleSheet.create({
Container:{
    flex:1,
    alignSelf:"stretch",
    top:30,

}
})