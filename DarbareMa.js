import {
    View,
    Text,
    StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity
} from 'react-native'
import React,{Component} from 'react'
export default class DarbareMa extends Component{
    render(){
        return(
            <View>
                <View  style={Style.Container} >
                <Text style={Style.Text}>
                    این اپ در حوزه گوشی های موبایل ولوازم موبایل می باشد
                ارائه بهترین جنس ها دراین اپ
                </Text>
                </View>
                <View>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('mahsulatMohem')
                        }}
                    >
                        <Image
                            style={{
                                width:40,
                                height:40,
                               bottom:55

                            }}

                            source={require('./img/chap.jpg')}/>
                    </TouchableWithoutFeedback>
                </View>
                </View>


        )
    }
}
const Style=StyleSheet.create({
    Container:{
        borderStyle:"solid",
        borderColor:"black",
        borderWidth: 3,
        top:70
    },
    Text:{
        fontSize:20,
        fontWeight: "bold",
        color:"black"
    }
})
