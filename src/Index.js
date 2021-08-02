import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Image,
SafeAreaView
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { postingBarcodeNumber } from '../src/actions/appAction';

class Index extends Component {
constructor(props) {
super(props);
this.handleTourch = this.handleTourch.bind(this);
this.state = {
torchOn: false,
barcodeValue: ""
}
}
onBarCodeRead = (e) => {
Alert.alert(
    "barkod numarası : " + e.data, "Barkod tipi : " + e.type,
[{
     text: "KAYDET", onPress: () => this.props.postingBarcodeNumber(e.data)
}]
    );    
}
render() {
    console.log("umut", this.barcodeValue);
return (
    <View style={styles.container}>
        <RNCamera
        style={styles.preview}
        captureAudio={false}
        torchMode={this.state.torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        onBarCodeRead={this.onBarCodeRead}
        ref={cam => this.camera = cam}
        >
        <Text
            style={{
            backgroundColor: 'white'
        }}>
            BARCODE SCANNER
        </Text>
        </RNCamera>
        <View style={styles.bottomOverlay}>
            <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
                <Image style={styles.cameraIcon}
                source={this.state.torchOn === true ? require('../images/flashOpened.png') : require('../images/flash.png')} />
            </TouchableOpacity>
        </View>
    </View>
)
}
    handleTourch(value) {
    if (value === true) {
        console.log("flaş açık ");
    this.setState({ torchOn: false });
    } else {
        console.log("flaş açık ");
    this.setState({ torchOn: true });
    }
    }
    }
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
},
preview: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center'
},
cameraIcon: {
marginTop:40,
height: 60,
width: 60
},
bottomOverlay: {
position: "absolute",
width: "100%",
flexDirection: "row",
justifyContent: "center",
alignItems:'center',
},
});
const mapStateToProps = (state) => {
    return { 
    }
  }
export default connect(
    mapStateToProps,
    {
      postingBarcodeNumber
    }
  )(Index)