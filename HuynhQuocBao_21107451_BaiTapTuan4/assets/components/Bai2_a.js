import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const { Text, View, TextInput, TouchableOpacity, Image } = require("react-native")

function Bai2_a() {

    const [show, setShow] = useState(false);

    return (

        <LinearGradient
            style={{
                flex: 1,
                width: "100%",
            }}
            colors={[
                'rgba(251, 203, 0, 1)',
                'rgba(191, 154, 0, 1)'
            ]}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 10,
                    marginTop: 100
                }}
            >LOGIN</Text>

            <View style={{
                marginTop: 100,
                marginLeft: 10,
                marginRight: 10
            }}>
                <TextInput style={{
                    height: 50,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    padding: 10,
                    color: 'black',
                    fontSize: 20,
                    marginBottom: 20
                }} placeholder="Name" />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    padding: 10,
                    color: 'black',
                }}>
                    <TextInput style={{
                        fontSize: 20,
                        flex: 1
                    }} placeholder="Password" secureTextEntry={!show ? 'text' : 'password'} />
                    <TouchableOpacity onPress={() => {
                        setShow((state) => !state);
                    }}><Image  source={require('../images/eye.png')} /></TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{
                marginTop: 50,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: "black",
                height: 50,
                display: "flex",
                justifyContent: 'center',
                // alignContent: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <Text style={{
                marginTop: 50,
                color: 'black',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold'
            }}>
                Fogot yout password?
            </Text>
        </LinearGradient>
    )
}

export default Bai2_a;
