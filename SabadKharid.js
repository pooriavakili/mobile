import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
}from 'react-native'
import React,{Component} from 'react'
export default class SabadKharid extends Component{
    render(){
        return(
            <View>
                <View style={Style.Touch}>

                        <Image
                            style={Style.Img}
                            source={require('./img/mobile.png')}/>


                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate('lavazemMobile')
                }}
                >



                    <Text style={Style.text1}>لوازم موبایل</Text>
                </TouchableWithoutFeedback>
                </View>
                <View style={Style.Touch2}>
                    <Image
                        style={Style.img1}
                        source={require('./img/gushy.png')}/>
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('mobileha')
                    }}
                    >
                        <Text style={Style.text2}>موبایل</Text>
                    </TouchableWithoutFeedback>
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
                                bottom:140
                            }}

                            source={require('./img/chap.jpg')}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
const Style=StyleSheet.create({
  Touch:{
      top:60,
      borderWidth: 2,
      borderStyle:"solid",
      borderColor:"black",


  },
    Touch2:{

        borderWidth: 3,
        borderStyle:"solid",
        borderColor:"black",
        top:70
    },
    text1:{
      fontSize:20,
        fontWeight: "bold",
        color:"black",
        right:60,
        top:-20,


    },
    text2:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        right:60,
        top:-20,

    },
    Img:{
      width:40,
        height:40,
        borderRadius:100,
        left:360,
        top:15

    },
    img1:{
        width:40,
        height:40,
        borderRadius:100,
        left:360,
        top:15
    }
})
