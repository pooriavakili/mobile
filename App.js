/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import {


  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';



import React, { Component } from "react";
import Router from "./Router";
console.disableYellowBox=true;




export default class App extends Component{
  render(){
    return(
        <Router/>
    )
  }
}


