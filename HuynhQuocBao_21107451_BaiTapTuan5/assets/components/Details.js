import { Text } from "react-native";

function Detail ({route, navigation}) {

    const { color } = route.params;

    return <Text>{color}</Text>
}

export default Detail;