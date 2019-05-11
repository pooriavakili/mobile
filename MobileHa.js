import {
    View,

     Text,

    TouchableWithoutFeedback,
    ScrollView,
    Image, TouchableOpacity
} from 'react-native'
import React,{Component} from 'react'

export default class MobileHa extends Component{
    render(){
        return(
            <View>
                <ScrollView>

                    <View>
                        <TouchableWithoutFeedback

                        >
                            <Image source={require('./img/samsong/galaxyj6.jpg')}
                                   style={{
                                       borderStyle:"solid",
                                       borderColor:"red",
                                       top:30,

                                       borderWidth: 1,
                                       left:50
                                   }}

                            />


                        </TouchableWithoutFeedback>

                        <View>

                            <Text style={{
                                fontSize:20,
                                color:"black",
                                fontWeight: "bold",
                                top:30,
                                left:60,


                            }}>galaxy j6</Text>

                        </View>

                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('galaxyj6')
                            }}

                        >

                        </TouchableOpacity>
                        <View
                            style={{
                                top:30,
                                right:230
                            }}
                        >
                            <TouchableWithoutFeedback

                                onPress={()=>{
                                    this.props.navigation.navigate('moshakhasatGushy')
                                }}
                            >
                                <Text style={{
                                    color:"black",
                                    fontSize:18,
                                    fontWeight:"bold",



                                }}>مشخصات گوشی</Text>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                                source={require('./img/samsong/galaxyj4.jpg')}
                                style={{

                                    borderStyle:"solid",
                                    borderColor:"red",
                                    bottom:150,

                                    borderWidth: 1,
                                    left:200

                                }}
                            />
                        </TouchableWithoutFeedback>
                        <Text
                            style={{
                                fontSize:20,
                                color:"black",
                                fontWeight: "bold",
                                bottom:150,
                                left:210,
                            }}
                        >galaxy j4</Text>
                        <TouchableWithoutFeedback
                            style={{


                            }}

                            onPress={()=>{
                                this.props.navigation.navigate('galaxyj4')
                            }}
                        >
                            <Text style={{
                                color:"black",
                                fontSize:18,
                                fontWeight:"bold",
                                bottom:150,
                                right:70,

                            }}>مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                                source={require('./img/samsong/galaxys8.jpg')}
                                style={{
                                    borderStyle:"solid",
                                    borderColor:"red",
                                    left:50,
                                    borderWidth:1,
                                    bottom:150
                                }}
                            />

                        </TouchableWithoutFeedback>
                        <Text
                            style={{
                                fontSize:20,
                                color:'black',
                                fontWeight:"bold",
                                bottom:150,
                                left:60

                            }}
                        >
                            galaxys8
                        </Text>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                this.props.navigation.navigate('galaxys8')
                            }}
                        >
                            <Text
                                style={{
                                    color:"black",
                                    fontSize:18,
                                    fontWeight:"bold",
                                    bottom:150,
                                    right:230,
                                }}

                            >مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>

                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                                style={{

                                    borderStyle:"solid",
                                    borderColor:"red",
                                    borderWidth:1,
                                    left:200,
                                    bottom:330
                                }}
                                source={require('./img/samsong/galaxynote9.jpg')}
                            />
                        </TouchableWithoutFeedback>

                    </View>
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:"bold",
                            color:'black',
                            bottom:330,
                            left:200

                        }}
                    >
                        galaxyNote9

                    </Text>
                    <View>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                this.props.navigation.navigate('galaxynote9')
                            }}
                        >
                            <Text
                                style={{
                                    color:'black',
                                    fontSize:20,


                                    right:80,
                                    bottom:330
                                }}



                            >مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                    <TouchableWithoutFeedback>
                        <Image
                            style={{
                                borderWidth:1,
                                borderColor:"red",
                                borderStyle:"solid",
                                left:60,
                                bottom:330
                            }}

                            source={require('./img/samsong/galaxya92018.jpg')}/>
                    </TouchableWithoutFeedback>

                        <Text
                        style={{fontSize:20,
                        color:"black",
                            fontWeight:"bold",
                            left:50,
                            bottom:320
                        }}
                        >
                            galaxya9
                        </Text>
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('moshakhasatGushy')
                        }}
                        >
                            <Text
                            style={{
                                fontSize:20,
                                fontWeight:"bold",
                                color:"black",
                                right:250,
                                bottom:315
                            }}
                            >مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                            source={require('./img/samsong/galaxyc5pro.jpg')}
                            style={{
                                borderWidth:1,
                                borderColor:"red",
                                borderStyle:"solid",
                                left:200,
                                bottom:470
                            }}
                            />
                        </TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontSize:20,
                            fontWeight:"bold",
                            color:"black",
                            left:200,
                            bottom:465
                        }}
                        >galaxyc5pro</Text>
                        <View>
                            <TouchableWithoutFeedback
                            onPress={()=>{
                                this.props.navigation.navigate('moshakhasatGushy')
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:20,
                                    fontWeight:"bold",
                                    color:'black',
                                    right:100,
                                    bottom:460
                                }}
                                >مشخصات گوشی</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <TouchableWithoutFeedback>
                        <Image
                            style={{
                                borderWidth:1,
                                borderColor:"red",
                                borderStyle:"solid",
                                left:50,
                                bottom:440
                            }}

                        source={require('./img/samsong/galaxya62018.jpg')}
                        />
                    </TouchableWithoutFeedback>
                    <Text
                    style={{
                        fontSize:20,
                        fontWeight:"bold",
                        color:"black",
                        left:50,
                        bottom:430
                    }}
                    >galaxya6</Text>
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('moshakhasatGushy')

                    }}
                    >
                        <Text
                        style={{
                            fontSize:20,
                            color:"black",
                            fontWeight:"bold",
                            right:250,
                            bottom:420
                        }}
                        >مشخصات گوشی</Text>
                    </TouchableWithoutFeedback>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                                style={{
                                    borderWidth:1,
                                    borderStyle:"solid",
                                    borderColor:"red",
                                    left:200,
                                bottom:630}}
                                source={require('./img/samsong/galaxyj7core.jpg')}/>
                        </TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontSize:20,
                            color:"black",
                            fontWeight:"bold",
                            left:230,
                            bottom:620
                        }}
                        >j7core</Text>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                this.props.navigation.navigate('moshakhasatGushy')

                            }}
                        >
                            <Text
                            style={{
                                fontSize:20,
                                color:"black",
                                fontWeight:"bold",
                                right:60,
                                bottom:615
                            }}
                            >مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                    <TouchableWithoutFeedback>
                        <Image
                        source={require('./img/samsong/galaxyj8.jpg')}
                        style={{
                            borderWidth:1,
                            borderColor:"red",
                            borderStyle:"solid",
                            left:40,
                            bottom:580
                        }}
                        />
                    </TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontSize:20,
                            color:"black",
                            fontWeight:"bold",
                            left:40,
                            bottom:570
                        }}
                        >galaxyj8</Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('moshakhasatGushy')

                        }}
                    >
                        <Text
                        style={{
                            fontSize:20,
                            color:"black",
                            fontWeight:"bold",
                            right:270,
                            bottom:560
                        }}
                        >مشخصات گوشی</Text>
                    </TouchableWithoutFeedback>
                    <View>
                        <TouchableWithoutFeedback>
                            <Image
                            source={require('./img/samsong/galaxyj72017.jpg')}
                            style={{
                                borderWidth:1,
                                borderStyle:"solid",
                                borderColor:'red',
                                left:190,
                                bottom:770
                            }}
                            />
                        </TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontSize:20,
                            color:"black",
                            fontWeight:"bold",
                            left:210,
                            bottom:760
                        }}
                        >galaxyj7</Text>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                this.props.navigation.navigate('moshakhasatGushy')

                            }}
                        >
                            <Text
                            style={{
                                fontSize:20,
                                color:"black",
                                fontWeight:"bold",
                                right:100,
                                bottom:750
                            }}
                            >مشخصات گوشی</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>

        )
    }
}
