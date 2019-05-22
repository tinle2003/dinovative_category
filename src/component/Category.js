import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Image,
    Picker,
    ScrollView,
    YellowBox
} from 'react-native';
import ToolbarEdit from './Toolbar';
import CategoryItem from './CategoryItem';
import TabNavigator from './tabBarCategory';


const {width,height} = Dimensions.get('window');
export default class Category extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectType:'',
        }
        YellowBox.ignoreWarnings(['ViewPagerAndroid']);
    }

    componentDidUpdate(){

    }

    render(){
        // import styles

        return(
            <React.Fragment>
                {/* View container */}
                <View style={{flex:1}}>

                    {/* View banner */}
                    <ImageBackground 
                        source={require("../img/bg_Category.png")}
                        style={{width:width,height:height/4,flex:1}}>
                        <ToolbarEdit titleToolbar={""}></ToolbarEdit>
                    </ImageBackground>

                    <View style={{flex:3}}>
                        {/* view Search */}
                        <View style={{backgroundColor:'white',flexDirection:'column',marginHorizontal: 16,marginVertical:5,marginTop: -30,borderRadius:50,}}>
                        
                            <View style={{marginLeft:19,flexDirection:'row',alignItems: 'center',shadowOffset:{width:30,height:10},shadowColor: 'black',shadowOpacity: 1,elevation:1,shadowRadius: 2,}}>
                                <Image source={require("../img/ic_search.png")}></Image>
                                
                                <TextInput 
                                    style={{flex:2}} 
                                    placeholder={"Find food store"} 
                                    placeholderTextColor={"grey"}></TextInput>

                                <Picker 
                                    style={{flex:1}}
                                    selectedValue={this.state.selectType}
                                    onValueChange={(itemValue)=>{
                                        this.setState({selectType:itemValue})
                                    }}>
                                    <Picker.Item label="Food" value="Food" />
                                    <Picker.Item label="Drink" value="Drink" />
                                </Picker>
                            </View>
                        </View>
                        
                        {/* View detail */}
                        <TabNavigator></TabNavigator>
                    {/* end view search */}
                    </View>
                {/* end View container */}
                </View>  
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({

})