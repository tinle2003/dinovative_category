import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';



const {width,height} = Dimensions.get('window');
export default class CategoryItem extends Component{
    
    constructor(props){
        super(props);
        console.log("Độ dài màn hình: "+width);

    }

    render(){
        // import styles
        var {txtDetail} = Styles;
        return(
            <React.Fragment>
                <TouchableOpacity>
                    {/* <Text>ABC12344</Text> */}
                    <View  style={{flexDirection:'row',margin:5,}}>
                        <Image
                        style={{flex:1,borderRadius:10}} 
                        // source={require("../img/bg_Category.png")}
                        source ={{uri:this.props.urlImg}}
                        resizeMode={"stretch"}
                        />

                        <View style={{marginLeft:10,flex:1.4}}>
                            <Text style={{fontWeight:'bold',color:'#2F2E2E',fontSize: 15,fontFamily:'Muli'}}>
                                {this.props.title}
                            </Text>
                            
                            <Text style={txtDetail}>Food <Text style={{color:'#999999',fontSize:16,fontWeight:"bold"}} >.</Text> <Text style={{color:"#565554"}}>3km</Text> </Text>
                            
                            <Text style={txtDetail}>
                            Beach Rd, Apia, Sa-moa, No. 23-1-1
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',borderBottomColor: "#F2F2F2",borderBottomWidth: 1,}}>

                </View>
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({
    txtDetail:{
        color:'#999999',
        fontSize:14,

    }
})