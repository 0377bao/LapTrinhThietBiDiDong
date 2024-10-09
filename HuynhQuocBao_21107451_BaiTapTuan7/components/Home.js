import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
    const [buttonActive, setButtonActive] = useState('Donut');
    const [listItem, setListItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const onPressButton = (data) => {
        navigation.navigate('Detail', { ...data });
    };
    const fetchApi = async () => {
        try {
            setIsLoading(true);
            const respont = await fetch(`https://6705cb63031fd46a8310f55b.mockapi.io/${buttonActive}`);
            const json = await respont.json();
            setListItem(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [buttonActive]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 10 }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 700,
                        marginBottom: 5,
                    }}
                >
                    Welcome, Jala!
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    Choice you Best food
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                    }}
                >
                    <TextInput
                        style={{
                            borderBlockColor: 'rgba(196, 196, 196, 1)',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            width: '85%',
                            paddingVertical: 15,
                            paddingHorizontal: 7,
                            borderRadius: 5,
                            fontSize: 16,
                            color: 'rgba(196, 196, 196, 0.1)',
                        }}
                        placeholder="Search food"
                    />
                    <Image
                        style={{ flex: 1, marginLeft: 10, borderRadius: 5 }}
                        source={require('../assets/images/search.png')}
                    />
                </View>
                <View
                    style={{
                        marginTop: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity onPress={() => setButtonActive('Donut')}>
                        <Text
                            style={[
                                {
                                    width: 120,
                                    height: 35,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    lineHeight: 35,
                                    borderBlockColor: 'rgba(0, 0, 0, 0.2)',
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderRadius: 5,
                                },
                                buttonActive === 'Donut' && styles.buttonActive,
                            ]}
                        >
                            Donut
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setButtonActive('PinkDonut')}>
                        <Text
                            style={[
                                {
                                    width: 120,
                                    height: 35,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    lineHeight: 35,
                                    borderBlockColor: 'rgba(0, 0, 0, 0.2)',
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderRadius: 5,
                                },
                                buttonActive === 'PinkDonut' && styles.buttonActive,
                            ]}
                        >
                            Pink Donut
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setButtonActive('Floating')}>
                        <Text
                            style={[
                                {
                                    width: 120,
                                    height: 35,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    lineHeight: 35,
                                    borderBlockColor: 'rgba(0, 0, 0, 0.2)',
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderRadius: 5,
                                },
                                buttonActive === 'Floating' && styles.buttonActive,
                            ]}
                        >
                            Floating
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={{
                        marginTop: 30,
                        flex: 1,
                    }}
                >
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View>
                            {listItem.map((item) => (
                                <ProductItem key={item.id} data={item} onPress={onPressButton} />
                            ))}
                        </View>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonActive: {
        backgroundColor: 'rgba(241, 176, 0, 1)',
    },
});
