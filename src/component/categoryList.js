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
    ScrollView
} from 'react-native';
import ToolbarEdit from './Toolbar';
import CategoryItem from './CategoryItem';


const {width,height} = Dimensions.get('window');
export default class categoryListTopOrdered extends Component{
    
    static navigationOptions ={
        tabBarLabel:"Top ordered",
    }
    constructor(props){
        super(props);
        this.state = {
            selectType:'',
        }
    }

    render(){
        // import styles

        return(
            <React.Fragment>
                    <ScrollView style={{backgroundColor:'white',flexDirection:'column',marginHorizontal: 16,}}>
                        <CategoryItem title={"Pablo Merchan Montes "} urlImg={"https://photo-2-baomoi.zadn.vn/w1000_r1/2018_05_15_181_26033803/666ae6c30382eadcb393.jpg"}></CategoryItem>
                        <CategoryItem title={"Pablo Merchan Montes Pablo Merch "} urlImg={"https://images.foody.vn/images/collage(2).png"}></CategoryItem>
                        <CategoryItem title={"Pacific Jewell Garden Coffee "} urlImg={"https://znews-photo.zadn.vn/w660/Uploaded/tmuitg/2018_03_21/5.jpg"}></CategoryItem>
                        <CategoryItem title={"Pablo Merchan Montes "}urlImg={"https://photo-2-baomoi.zadn.vn/w1000_r1/2018_05_15_181_26033803/666ae6c30382eadcb393.jpg"}></CategoryItem>
                        <CategoryItem title={"Pablo Merchan Montes Pablo Merch"} urlImg={"https://images.foody.vn/images/collage(2).png"}></CategoryItem> 

                    </ScrollView>
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({

})