import React, {Component} from 'react';
import {
    View
    , Text,
    StyleSheet,
    ScrollView, TouchableOpacity
} from 'react-native'

export default class Galaxys8 extends Component {
    render() {
        return (
            <View >
                <ScrollView>
                    <Text style={style.Text}>شبکه 2G
                    </Text>
                    <View>
                        <Text  style={style.Text2}>
                            GSM 850 / 900 / 1800 / 1900 - سیم کارت 1 & سیم کارت 2 (دوگانه-سیم کارت model فقط)
                        </Text>
                    </View >
                    <View >
                        <Text style={style.Text3}>شبکه 3G</Text>
                        <View>
                            <Text style={style.Text4}>
                                HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text5}>شبکه 4G</Text>
                        <View>
                            <Text style={style.Text6}>
                                LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850)
                                , 7(2600), 8(900), 17(700), 20(800), 28(700)
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text7}>سیم کارت
                        </Text>
                    </View>
                    <View>
                        <Text style={style.Text8}>
                            تک سیم کارت (نانو سیم کارت) ,دوگانه سیم کارت (نانو سیم کارت, استندبای دوگانه)
                        </Text>
                    </View>
                    <View>
                        <Text style={style.Text9}>تاریخ معرفی</Text>
                        <View>
                            <Text style={style.Text10}>2017, مارس</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text11}>وضعیت</Text>
                    </View>
                    <View>
                        <Text style={style.Text12}>موجود در بازار. عرضه شده در آوریل 2017</Text>
                    </View>
                    <View>
                        <Text style={style.Text13}>ابعاد</Text>
                        <View>
                            <Text style={style.Text14}>159.5x73.4x8.1 میلیمتر (6.28x2.89x0.32 اینچ)</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text15}>وزن</Text>
                    </View>
                    <View>
                        <Text style={style.Text16}>173 گرم (6.10 oz)</Text>
                    </View>
                    <View>
                        <Text style={style.Text17}>ساختار</Text>
                        <View>
                            <Text style={style.Text18}>
                                Corning Gorilla Glass 5 پشت
                            </Text>
                        </View>

                    </View>
                    <View>
                        <Text style={style.Text19}>نوع</Text>
                    </View>
                    <View>
                        <Text style={style.Text20}>صفحه نمایش لمسی خازنی Super AMOLED, با 16 میلیون رنگ</Text>
                    </View>
                    <View>
                        <Text style={style.Text21}>اندازه</Text>
                        <View>
                            <Text style={style.Text22}>
                                6.2 اینچ (نسبت سطح صفحه نمایش به بدنه در حدود 84.0 درصد)

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text23}>وضوح</Text>
                        <View>
                            <Text style={style.Text24}>
                                1440x2960 پیکسل (در حدود 529 پیکسل در هر اینچ)
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.Text25}>قابلیت چند لمسی</Text>
                        <Text style={style.Text26}>بله</Text>
                    </View>
                    <TouchableOpacity
                        style={style.Text27}
                    >
                        <Text
                            style={style.Text28}
                        >پرداخت</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>



        );
    }
}



const style=StyleSheet.create({

    Text:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10

    },
    Text2:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingLeft: 10


    },
    Text3:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text4:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingLeft: 10
    },
    Text5:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text6:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingLeft: 10
    },
    Text7:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text8:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text9:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text10:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text11:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text12:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text13:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text14:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingLeft: 10
    },
    Text15:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text16:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text17:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text18:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingLeft: 10
    },
    Text19:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text20:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text21:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text22:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text23:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text24:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text25:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        paddingRight: 10
    },
    Text26:{
        fontSize:20,
        fontWeight: "bold",
        borderColor:'black',
        borderWidth: 2,
        borderStyle:"solid",
        paddingRight: 10
    },
    Text27:{
        alignSelf: "stretch",
        backgroundColor:"green"
    },
    Text28:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        right:150
    }


})






