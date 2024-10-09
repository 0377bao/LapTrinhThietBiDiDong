import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ProductItem({ data, onPress }) {
    return (
        <TouchableOpacity
            onPress={() => {
                onPress(data);
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(244, 221, 221, 1)',
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 20,
                }}
            >
                <Image
                    style={{
                        width: 110,
                        height: 110,
                        borderRadius: 10,
                        marginRight: 15,
                    }}
                    source={{
                        url: data.image,
                    }}
                />
                <View style={{ justifyContent: 'space-around' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 700,
                        }}
                    >
                        {data.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: 'rgba(0, 0, 0, 0.54)',
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
                <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                    }}
                    source={require('../assets/images/plusbt.png')}
                />
            </View>
        </TouchableOpacity>
    );
}
