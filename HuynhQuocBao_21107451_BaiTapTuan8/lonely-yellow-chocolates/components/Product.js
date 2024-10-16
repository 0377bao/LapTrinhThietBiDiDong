import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import RenderItem from './RenderItem';

const data = [
  {
    image: require('../image/bike_red.png'),
    name: 'Product 01',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 02',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 03',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 04',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 05',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 06',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 05',
    price: '1800',
  },
  {
    image: require('../image/bike_red.png'),
    name: 'Product 06',
    price: '1800',
  },
];

const Product = ({ navigation }) => {
  const [state, setState] = useState(1);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            fontSize: 20,
            fontWeight: 700,
            color: 'red',
          }}>
          The world’s Best Bike
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={{
              width: '27%',
              borderWidth: 1,
              borderColor: state === 1 ? 'red' : 'rgba(233, 65, 65, 0.53)',
              borderStyle: 'solid',
              borderRadius: 5,
              paddingVertical: 2,
            }}
            onPress={() => {
              setState(1);
            }}>
            <Text style={{ textAlign: 'center' }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '27%',
              borderWidth: 1,
              borderColor: state === 2 ? 'red' : 'rgba(233, 65, 65, 0.53)',
              borderStyle: 'solid',
              borderRadius: 5,
              paddingVertical: 2,
            }}
            onPress={() => {
              setState(2);
            }}>
            <Text style={{ textAlign: 'center' }}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '27%',
              borderWidth: 1,
              borderColor: state === 3 ? 'red' : 'rgba(233, 65, 65, 0.53)',
              borderStyle: 'solid',
              borderRadius: 5,
              paddingVertical: 2,
            }}
            onPress={() => {
              setState(3);
            }}>
            <Text style={{ textAlign: 'center' }}>Mountain</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, flexDirection: 'row' }}>
          <ScrollView>
            <FlatList
              // horizontal
              numColumns={2}
              showVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
              data={data}
              renderItem={({ item }) => <RenderItem data={item} />}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;
