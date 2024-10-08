import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Screen2({navigation}) {

    const [color, setColor] = useState('vs_blue')

    return (
        <View style={{flex: 1}}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    objectFit: 'contain',
                    alignSelf: 'flex-start',
                }} source={require('../images/vs_blue.png')} />
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginTop: 10,
                }}>
                    Điện Thoại Vsmart Joy 3{'\n'}
                    Hàng chính hãng
                </Text>
            </View>
            <View style={{
                padding: 10,
                flex: 1,
                backgroundColor: 'rgba(196, 196, 196, 1)',
            }}>
                <Text style={{
                    fontSize: 17
                }}>
                    Chọn một màu bên dưới:
                </Text>
                <View style={{
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={[
                        {
                            backgroundColor: 'rgba(197, 241, 251, 1)',
                            marginTop: 20,
                            width: 80,
                            height: 80,
                            marginBottom: 20
                        }, color === 'vs_silver' && styles.active
                    ]} onPress={() => {setColor('vs_silver')}} />
                    <TouchableOpacity style={[
                        {
                            backgroundColor: 'rgba(243, 13, 13, 1)',
                            marginTop: 20,
                            width: 80,
                            height: 80,
                            marginBottom: 20
                        }, color === 'vs_red' && styles.active
                    ]} onPress={() => {setColor('vs_red')}} />
                    <TouchableOpacity style={[
                        {
                            backgroundColor: 'rgba(0, 0, 0, 1)',
                            marginTop: 20,
                            width: 80,
                            height: 80,
                            marginBottom: 20
                        }, color === 'vs_black' && styles.active
                    ]} onPress={() => {setColor('vs_black')}} />
                    <TouchableOpacity style={[
                        {
                            backgroundColor: 'rgba(35, 72, 150, 1)',
                            marginTop: 20,
                            width: 80,
                            height: 80,
                            marginBottom: 20
                        }, color === 'vs_blue' && styles.active
                    ]} onPress={() => {setColor('vs_blue')}} />
                </View>
                <TouchableOpacity style={{
                    marginTop: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 5,
                    backgroundColor: 'rgba(25, 82, 226, 0.58)',
                    shadowColor: 'rgba(0,0,0, 0.5',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }} onPress={() => {
                        navigation.navigate('Home', {imagesColor: color});
                    }}>
                        XONG
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid',
    }
})

export default Screen2;