import {createStackNavigator,createDrawerNavigator,DrawerItems,SwitchNavigator} from 'react-navigation'
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    SafeAreaView
}from 'react-native'
import React,{Component} from 'react'
import Aks from "./Aks";
import Search from "./Search";
import Galaxyj6 from "./Stack/Galaxyj6";
import MasulatMohem from "./MahsulatMohem";
import Vorood from './Vorood'
import Galaxyj4 from './Stack/galaxyJ4'
import MoshakhasatGushy from "./MoshakhasatGushy";
import Galaxys8 from "./Stack/galaxy s8";

import Galaxynote9 from "./Stack/galaxynote9";
import SabadKharid from "./SabadKharid";
import SabetName from "./SabetName";
import ErtebatBaMa from "./ErtebatBaMa";
import DarbareMa from "./DarbareMa";
import Biography from './Biography'
import TamasBaMa from "./TamasBaMa";
import MobileHa from "./MobileHa";
import LavazemMobile from "./LavazemMobile";
export default class Router extends Component{
    render(){
        return(
          <Stacking/>

        )
    }
}

const customComponent=(props)=>(

    <SafeAreaView
        style={{
           flex:1,

        }}

    >

        <View style={{height:150,backgroundColor:"white",alignItems: "center",justifyContent: "center"}}>
        <Image style={{width:70,height:70}} source={require('./img/gushy.png')}/>

        </View>
        <ScrollView>
        <View
        style={{left:120,

        }}
        >

            <DrawerItems {...props}/>
        </View>
        </ScrollView>
    </SafeAreaView>

)
export const Stacking=createStackNavigator({
    aks:Aks,
    search:Search,
    galaxyj6: Galaxyj6,
    galaxyj4:Galaxyj4,
    galaxys8:Galaxys8,
    galaxynote9:Galaxynote9,
    moshakhasatGushy:MoshakhasatGushy,
    lavazemMobile:LavazemMobile,
    mobileha:MobileHa,

    mahsulatMohem:{screen:createDrawerNavigator({
            mahsulatMohem: {
                screen: MasulatMohem,

               navigationOptions:{
                    drawerLabel:'محصولات مهم',
                   drawerIcon:<Image
                   source={require('./img/mobile.png')

                   }
                   style={{
                       width:40,
                       height:40,
                       right:0
                   }}
                   />




               }
            },
             sabetName: {
                 screen: SabetName,
                 navigationOptions: {
                     drawerLabel: "ثبت نام",
                     drawerIcon:<Image
                     source={require('./img/vorood.png')}
                     style={{
                         width:40,
                         height:40,
                         right:0
                     }}

                     />

                 }
             },
            voorud:{
                screen:Vorood,
                navigationOptions:{
                    drawerLabel:'ورود',
                    drawerIcon:<Image
                    source={require('./img/sabetNName.png')}
                    style={{
                        width:40,
                        height:40,
                        right:0
                    }}

                    />
                }
            },
            sabadKharid:{
                screen:SabadKharid,
                navigationOptions:{
                    drawerLabel:"محصولات",
                    drawerIcon:<Image
                        source={require('./img/mobile.png')

                        }
                        style={{
                            width:40,
                            height:40,
                            right:0
                        }}
                    />

                }
            },
            ertebatBaMa:{
                screen:ErtebatBaMa,
                navigationOptions:{
                    drawerLabel:"ارتباط با ما",
                    drawerIcon:<Image
                    source={require('./img/ertebat.jpeg')}
                    style={{
                        width:40,
                        height:40,
                        right:0
                    }}

                    />
                }
            },
            tamasBaMa:{
              screen:TamasBaMa,
              navigationOptions:{
                  drawerLabel:"تماس با ما",
                  drawerIcon:<Image
                  source={require('./img/tamasbama.png')}
                  style={{
                      width:40,
                      height:40,
                      right:0
                  }}
                  />
              }
            },
            darbareMa:{
                screen:DarbareMa,
                navigationOptions:{
                    drawerLabel:"درباره اپ",
                    drawerIcon:<Image
                    source={require('./img/gushy.png')}
                    style={{
                        width:60,
                        height:60,
                        right:0
                    }}
                    />
                }
            },




        },{
        contentComponent:customComponent,
            drawerPosition:"right",

            }
        )}



})



