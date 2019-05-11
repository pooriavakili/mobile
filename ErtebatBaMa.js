import {
    View,
    Text,
    StyleSheet,
    Linking,
    Image,
    TouchableWithoutFeedback
}from 'react-native'

import React,{Component} from 'react'



export default class ErtebatBaMa extends Component{
    Telegram=()=> {
        Linking.openURL(('https://t.me/ASHKEVARVAKILI')).
        catch((err) => console.error('An error occurred', err));

    }
    Instagram=()=>{
        Linking.openURL(('https://www.instagram.com/pooriaashkevarvakili/')).
        catch((err) => console.error('An error occurred', err));
    }

    render(){
        return(
            <View>
                <View style={Style.Touch}>
                    <TouchableWithoutFeedback
                     onPress={this.Telegram}
                    >
                        <Image
                        style={Style.Image4}
                        source={require('./img/telegram.jpeg')}
                        />



                    </TouchableWithoutFeedback>
                    <Text style={Style.text}>تلگرام</Text>
                </View>
                <View style={Style.Touch2}>
                    <TouchableWithoutFeedback
                      onPress={this.Instagram}
                    >
                        <Image
                            style={Style.Image5}
                            source={require('./img/instagram.jpeg')}
                        />

                    </TouchableWithoutFeedback>
                    <Text style={Style.text}>اینستاگرام</Text>
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
                              bottom:150
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
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        top:70
    },
    Touch2:{
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        top:90
    },
    text:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
       right:60,
        bottom:20
    },
    Image4:{
        width:50,
        height:50,
        left:350,
        top:20

    },
    Image5:{
        width:50,
        height:50,
        left:350,
        top:20
    }
})
