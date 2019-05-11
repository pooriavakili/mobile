import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback, Image
} from 'react-native'
import React,{Component} from 'react'
export default class TamasBaMa extends Component{
    render(){
        return(
            <View>
                <Text style={Style.Text}>جهت تماس باما فرم زیر را تکمیل کنید</Text>
                <View style={Style.View1}>
                <TextInput
                placeholder='شماره تماس'
                placeholderTextColor='black'
                />
                </View>
                <View style={Style.View2}>
                <TextInput
                    placeholder='ایمیل'
                    placeholderTextColor='black'
                />
                </View>
                <View
                style={Style.View}
                >
                <TouchableOpacity >
                    <Text style={Style.Text2}>ارسال پیام</Text>
                </TouchableOpacity>
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
                                bottom:185

                            }}

                            source={require('./img/chap.jpg')}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
const Style=StyleSheet.create({
    View1:{
   top:50
    },
    View2:{
        top:70
    },
    Text:{
        fontSize:20,
        color:'black',
        fontWeight: "bold",
        top:40
    },
    Text2:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    View:{
        backgroundColor:"green",
        width:70,
        height:70,
        left:170,
        top:90
    }
})
