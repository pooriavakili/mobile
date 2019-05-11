import {
    View,
    Text,
    TextInput,
    Dimensions,
    ImageBackground,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity, Image,
} from 'react-native'
import React,{Component} from 'react'
import {Form} from 'native-base'
const{width,height}=Dimensions.get('window');
export default class SabetName extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"لطفا ایمیل را درست بزنید",
            password:"لطفا پسورد را درست بزنید"
        }
    }

    render(){
        const {email}=this.state;
        const {password}=this.state;
        return(
            <View style={Style.Container}>
     <View style={Style.Text}>
         <Form>
         <ImageBackground style={{width:width,height:height}} source={require('./img/Tabiat.jpg')}>
             <View
             style={{
                 left:50,
                 top:190,
                 alignSelf: "stretch"
             }}
             >

         <TextInput placeholder='ایمیل'
                    placeholderTextColor="red"/>
                 <Text
                     style={{
                         fontSize:20,
                         color:"red",
                         fontWeight: "bold",
                         right:385,
                         bottom:35,
                     }}
                 >ایمیل</Text>
                 <Text style={{
                     fontSize:17,
                     right:250,
                     bottom:25,
                     color:"black"
                 }}>{email}</Text>
             </View>
             <View
                 style={{
                     left:50,
                     top:165,
                     alignSelf: "stretch"
                 }}
             >

                 <TextInput placeholder='پسورد'
                            placeholderTextColor="red"
                            secureTextEntry={true}


                 />
                 <Text
                     style={{
                         fontSize:20,
                         color:"red",
                         fontWeight: "bold",
                         right:385,
                         bottom:40,
                     }}
                 >پسورد</Text>
                 <Text
                 style={{
                     fontSize:17,
                     right:250,
                     bottom:30,
                     color:"black"
                 }}
                 >{password}</Text>
                 <View
                     style={{

                         right:200,
                         bottom:10,
                         backgroundColor:"green",
                       marginLeft: 250,
                         marginHeight:250


                     }}
                 >
                 <TouchableWithoutFeedback
                     onPress={()=>{
                         this.props.navigation.navigate('voorud')
                     }}
                 >
                     <Text
                     style={{
                         fontSize:20,
                         color:"white",
                         fontWeight:"bold",
                         textAlign: "center"
                     }}
                     >ثبت نام</Text>
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
                                 bottom:330,
                                 right:40

                             }}

                             source={require('./img/chap.jpg')}/>
                     </TouchableWithoutFeedback>
                 </View>
             </View>

         </ImageBackground>
         </Form>
     </View>
            </View>
        )
    }
}
const Style=StyleSheet.create({
Container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",

},

})
