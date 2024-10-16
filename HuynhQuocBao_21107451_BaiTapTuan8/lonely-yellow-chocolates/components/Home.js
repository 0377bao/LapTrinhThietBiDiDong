import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 10, alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', width: '80%', marginTop: 30 }}>
          A premium online store for sporter and their stylish choice
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#E941411A',
            padding: 20,
            borderRadius: 30,
          }}>
          <Image
            style={{
              width: 202,
              height: 190,
            }}
            source={require('../image/bike_blue.png')}
          />
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 700,
            marginTop: 10,
            width: 150,
            textAlign: 'center',
          }}>
          POWER BIKE SHOP
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Products')
        }}>
          <Text
            style={{
              marginTop: 30,
              backgroundColor: '#E94141',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 20, color: 'white'
            }}>
            Get Started{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
