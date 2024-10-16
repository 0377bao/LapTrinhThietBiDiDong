import { Text } from 'react-native';
import { View, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react'

const RenderItem = ({ data }) => {

const [isLike, setIsLike] = useState(false);

  return (
    <View
      style={{
        width: '50%',
        backgroundColor: '#E941411A',
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
      }}>
      <TouchableOpacity style={{
        position: 'absolute',
        top: 5,
        left: 5,
        zIndex: 1
      }}
      
      onPress={() => setIsLike(!isLike)}>
        <Image
          style={{
            width: 25,
            height: 25,
          }}
          source={isLike ? require('../image/heart_red.png') : require('../image/heart_black.png')}
        />
      </TouchableOpacity>
      <Image
        style={{
          width: 127,
          height: 145,
        }}
        source={data.image}
      />
      <Text
        style={{
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: 18,
          fontWeight: 400,
          marginTop: 10,
          fontFamily: 'Voltaire'
        }}>
        {data.name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 700,
          marginTop: 5,
        }}>{data.price}</Text>
    </View>
  );
};

export default RenderItem;
