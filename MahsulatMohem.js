import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    TextInput,
    ScrollView,
    ImageBackground,
    TouchableOpacity
} from "react-native"
import {Icon,Header,Left,Right} from 'native-base'
import SwiperFlatList from 'react-native-swiper-flatlist';
class MasulatMohem extends Component {



    render() {
        return (
                    <View>
                        <ScrollView>
                     <Header style={{backgroundColor:"red",
                     top:-10
                     }}>
                <Right style={{left:150,   top:5}} >

                    <Icon onPress={()=>{
                        this.props.navigation.openDrawer()
                    }}>
                        <Image style={{height:20,width:20,

                        }} source={require('./img/menu.png')}/>
                    </Icon>
                </Right>

                         <Left style={{right:220}}>
                             <Icon >
                                 <Image style={{width:40,height:40}} source={require('./img/gushy.png')}/>
                             </Icon>
                         </Left>
                         <TouchableOpacity
                             onPress={()=>{
                                 this.props.navigation.navigate('search')
                             }}
                         style={{
                             right:170,
                             top:15,

                         }}

                         >
                             <Text style={{
                                 fontSize:20,
                                 color:"black",
                                 fontWeight:"bold"
                             }}>Search</Text>
                         </TouchableOpacity>
                     </Header>
                       <View>
                           <SwiperFlatList

                           autoplayDelay={2}
                           autoplayLoop
                           index={2}
                           showPagination
                           >
                         <View
                         style={[Style.child,{backgroundColor:"tomato"}]}
                         >
                             <Text style={Style.text}>
                                 خرید به صورت اینترنتی
                             </Text>
                         </View>
                          <View
                          style={[Style.child,{backgroundColor:"green"}]}
                          >
                          <Text style={Style.text}>خریدی ارزان ومط‌مئن</Text>
                          </View>
                               <View style={[Style.child, { backgroundColor: 'skyblue' }]}>
                                   <Text style={Style.text}>ارسال درب منزل</Text>
                               </View>
                        
                           </SwiperFlatList>
                       </View>
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


                        </ScrollView>
                        </View>




        );
    }
}
export const { width, height } = Dimensions.get('window');

export default MasulatMohem;
const Style=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    child: {
        height: height * 0.5,
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})