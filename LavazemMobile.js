import {
    View,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    Image,
    StyleSheet, TouchableOpacity
} from 'react-native'
import React,{Component} from 'react'
export default class LavazemMobile extends  Component{
    render(){
        return(


            <View>


                    <View>
                        <TouchableWithoutFeedback

                        >
                            <Image source={require('./img/lavazem/power.jpeg')}
                                   style={{
                                       borderStyle:"solid",
                                       borderColor:"red",
                                       top:30,

                                       borderWidth: 1,
                                       left:50
                                   }}

                            />


                        </TouchableWithoutFeedback>





                    </View>




                   <TouchableWithoutFeedback>
                    <Text style={{
                        fontSize:20,
                        color:"black",
                        fontWeight: "bold",
                        bottom:-30,
                        right:200


                    }}>پاوربانک</Text>
                   </TouchableWithoutFeedback>
                   <View>
                       <TouchableWithoutFeedback>
                           <Image
                               style={{
                                   borderWidth:1,
                                   borderStyle:"solid",
                                   borderColor:"red",
                                   top:60,
                                   left:50
                               }}
                           source={require('./img/lavazem/headphone.jpeg')}
                           />
                       </TouchableWithoutFeedback>
                       <Text
                       style={{
                           fontSize:20,
                           color:"black",
                           fontWeight:"bold",
                           bottom:-70,
                          right:230
                       }}
                       >هدفون</Text>
                   </View>

            </View>
                    

        )
    }
}

