import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Detail({ route, navigation }) {
    const data = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: '100%', height: 300 }} source={{ url: data.image }} />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 700,
                            marginBottom: 10,
                        }}
                    >
                        {data.name}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            style={{
                                fontSize: 15,
                            }}
                        >
                            Spicy tasty donut family
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            ${data.price}
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 700,
                                marginBottom: 10,
                            }}
                        >
                            Restaurants info
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                            }}
                        >
                            Order a Large Pizza but the size is the equivalent of a medium/small from other places at
                            the same price range.
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                        style={{
                            marginTop: 20,
                            height: 58,
                            justifyContent: 'center',
                            backgroundColor: 'rgba(241, 176, 0, 1)',
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 700, color: 'white' }}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
