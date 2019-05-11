import React, {Component} from 'react';
import {
    View,
    Image,
    Text
} from "react-native";

export default class Aks extends Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('mahsulatMohem')
        },3000)
    }
  
    render() {
        return (
            <View style={{  flex: 1,
                alignItems: "center",
                justifyContent: "center",
                bottom:40}}>
                <Image  source={require('./img/gushy.png')}/>
                <Text style={{
                    fontSize:20,
                    color:"purple",
                    fontWeight: "bold"
                }}> برند ها وقیمت های موبایل </Text>
            </View>
        );
    }
}




