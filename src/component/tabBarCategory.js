import React,{Component} from 'react';
import{
    Dimensions,
    Text
} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import categoryListTopOrdered from './categoryList';


const {width,height} = Dimensions.get('window');

const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
    Home: categoryListTopOrdered,
    topOdered:categoryListTopOrdered,
    Top:categoryListTopOrdered
},{
    swipeEnabled:true,
    tabBarOptions:{
        activeBackgroundColor:'white',
        inactiveTintColor :'#B3B3B3',
        activeTintColor:'#2F2E2E',
        labelStyle:{
            fontSize: 14,
            fontWeight:'400' 
        },
        style:{
            backgroundColor:'white',
        },
        allowFontScaling:true
    },
}
));
export default TabNavigator;