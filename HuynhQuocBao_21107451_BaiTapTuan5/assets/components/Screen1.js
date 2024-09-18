import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen2 from "./Screen2";

function Screen1 ({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image source={require('../images/vs_blue.png')} />
                </View>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Image source={require('../images/star.png')} />
                        <Image source={require('../images/star.png')} />
                        <Image source={require('../images/star.png')} />
                        <Image source={require('../images/star.png')} />
                        <Image source={require('../images/star.png')} />
                    </View>
                    <Text>
                        (Xem 828 đánh giá)
                    </Text>
                </View>
                <View style={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        1.790.000 đ
                    </Text>
                    <Text style={{
                        fontSize: 17,
                        textDecorationLine: 'line-through'
                    }}>
                        1.790.000 đ
                    </Text>
                </View>
                <View style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <View style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        display: 'flex',
                        marginLeft: 10,
                        width: 25,
                        height: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 999,
                    }}><Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',}}>?</Text></View>
                </View>
                <TouchableOpacity style={{
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 5,
                }} onPress={() => {
                    navigation.navigate('ChooseColor');
                }}>
                    <Text style={{
                    textAlign: 'center'}}>
                        4 MÀU-CHỌN MÀU
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginTop: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 5,
                    backgroundColor: 'red',
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
                    }}>
                        CHỌN MUA
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen1;