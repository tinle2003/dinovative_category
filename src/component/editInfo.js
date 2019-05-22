import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
    
} from 'react-native';
import ToolbarEdit from './Toolbar';
import LinearGradient from 'react-native-linear-gradient';

const {width,height} = Dimensions.get('window');
export default class editInfo extends Component{
     
    render(){
        // import styles
        const {container,viewYourName,inputname,btnSave} = Styles;

        return(
            <React.Fragment>
                <View style={container}>
                    <View>
                        {/* toolbar */}
                        <ToolbarEdit titleToolbar={"Edit info"}></ToolbarEdit>
                    </View>

                    {/* View yourName */}
                    <View style={viewYourName}>
                        <Text>Your name</Text>
                    </View>

                    {/* View input & button save */}
                    <View>
                        <TextInput style={inputname} placeholderTextColor={'grey'} placeholder={"Name"}></TextInput>


                        <TouchableOpacity >
                            <LinearGradient 
                                colors={['red', 'blue']}
                                style={btnSave} >
                                <Text style={{color:'white',marginVertical:19}}>
                                    Save
                                </Text>
                            </LinearGradient>
                            
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    viewYourName:{
        width:width,
        alignItems:'center',
        marginTop: 16,
    },
    inputname:{
        marginTop:9,
        borderRadius:10,
        borderColor:'#999999',
        borderWidth:1,
        textAlign:'center',
        marginHorizontal: 16,
        height:55
    },
    btnSave:{
        justifyContent: 'center',
        marginTop:8,
        marginHorizontal: 16,
        backgroundColor:'#E38D03',
        alignItems:'center',
        borderRadius:10,
        height:55,
        elevation: 5
    }
})