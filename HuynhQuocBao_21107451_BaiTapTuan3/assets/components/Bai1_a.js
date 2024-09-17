import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function () {
    const [state, setState] = useState(1);
    return (
        <LinearGradient 
            colors={[
            'rgba(199, 244, 246, 1)',
            'rgba(209, 244, 246, 1)',
            'rgba(229, 244, 245, 1)',
            'rgba(55, 214, 248, 1)',
            'rgba(0, 204, 249, 1)'
            ]}
            style={styles.container}>
            <View style={styles.cycle}> 
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
            <Text style={{
                fontSize: 25,
                fontWeight: 700,
            }}>HOW WE WORK?</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // background: 'linear-gradient(rgba(199, 244, 246, 1), rgba(0, 204, 249, 1), to bottom)',
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