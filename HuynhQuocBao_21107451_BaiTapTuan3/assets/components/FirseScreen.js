import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function () {
    const [state, setState] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.cycle}>
                <Text>{state}</Text>
            </View>
            <Text style={{
                fontSize: 25,
                width: 250,
                fontFamily: 'Roboto',
                fontWeight: 700,
                textAlign: 'center',
            }}>GROW {'\n'}
            YOUR BUSINESS</Text>
            <Text style={{
                fontSize: 15,
                fontWeight: 700,
                width: 300,
                textAlign: 'center',
            }}>
                We will help you to grow your business using
                online server
            </Text>
            <View style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity style={{
                    backgroundColor: 'yellow',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                }}
                    onPress={() => {
                        setState((state) => state + 1)
                    }}
                >
                    <Text style={{
                    fontWeight: 700,
                    fontSize: 20
                }}>
                        INCREASE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'yellow',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                }}
                    onPress={() => {
                        setState((state) => state - 1)
                    }}
                >
                    <Text style={{
                    fontWeight: 700,
                    fontSize: 20
                }}>
                        DECREASE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 204, 249, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cycle: {
    width: 140,
    height: 140,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 15,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});