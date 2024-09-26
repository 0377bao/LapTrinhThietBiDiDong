import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Screen4_a from './assets/components/Screen4_a';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginBottom: -35}}> 
        <Screen4_a />
        <StatusBar style="auto" />
     </SafeAreaView>
  );
}

