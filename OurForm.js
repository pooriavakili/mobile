import React,{
    Component
}from 'react'
import {
    Text,
    View,
    TextInput,

}from 'react-native'
import {reduxForm,Field} from 'redux-form'
const validate=Values=>{
    const errors={};
    if(!Values.fname){
        errors.fname="لطفا ایمیل را وارد کنید"
    }else if(!Values.fname){
        errors.fname="esm har che dustdary Sabet Kon"
    }
    if(!Values.Password){
        errors.Password="لطفا پسورد را وارد کنید"
    }else if(!Values.Password.length>=10){
        errors.Password="lotfan addad bozorgtar az 10 vared nakonid"
    }
    return errors;
}
const inForm=({label,meta:{error},input:{onChange}})=>{
    return(
        <View style={{

            alignItems: "center",
            justifyContent: "center",
            top:80
        }}>
            <Text>{label}</Text>
            <TextInput style={{
                borderWidth: 1,
                width:200,
                marginBottom: 20
            }}
                       onChangeText={onChange}
                       placeholder="password"
                       secureTextEntry={true}

            />
            <Text  style={{color:"red",

            }}>{error}</Text>
        </View>
    )
}
const Forming=({label,meta:{error},input:{onChange}})=>{

    return(
        <View
            style={{

                alignItems: "center",
                justifyContent: "center",
                top:80
            }}
        >
            <Text>{label}</Text>
            <TextInput style={{
                borderWidth: 1,
                width:200,
                marginBottom: 10
            }}
                       onChangeText={onChange}
                       placeholder="ایمیل"
            />
            <Text  style={{color:"red",

            }}>{error}</Text>
        </View>
    )
}
const OurForm=props=>{
    return(
        <View>
            <Field
                name="fname"
                label="Email"
                component={Forming}

            />
            <Field
                name="Password"

                label="Password"
                component={inForm}

            />

        </View>
    )

}
const Form=reduxForm({
    form:"Something",
    validate
})(OurForm);
export default Form