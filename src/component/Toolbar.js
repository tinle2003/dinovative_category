import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('window');
export default class ToolbarEdit extends Component{
     
    render(){
        const {textToolbar} = Styles;
        return(
            <React.Fragment>
                <View style={{width:width/4,margin:10,flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row',alignSelf: 'center',}}>
                        <Image source={require("../img/goBack.png")} size={26}></Image>
                        <Text style={textToolbar}>Back</Text>
                    </TouchableOpacity>
                    <View style={{width:width-width/2.5,alignItems:'center'}}>
                        <Text style={[textToolbar]}>{this.props.titleToolbar}</Text>
                    </View>

                </View>
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({
    textToolbar:{
        paddingLeft:1,
        fontWeight:'bold',
        fontSize: 14,
        marginTop: 2,
    }
})