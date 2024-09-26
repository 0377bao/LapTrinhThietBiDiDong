import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
    {
      title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
      desc: 'Shop devang',
      image: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    },
  ];

  const Item = ({obj}) => (
    <View style={[styles.item, {
        alignItems: 'center',
    }]}>
      <Image style={{
        width: 100,
        height: 100
      }} source={{uri: obj.image}} />
      <View style={{
        flex: 1,
        marginLeft: 10
      }}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{
            fontSize: 14,
            fontWeight: 'bold',
            width: '100%',
            marginTop: 10
        }}>{obj.title}</Text>
        <Text style= {{
            fontSize: 13,
            color: 'red',
            fontWeight: 'bold',
            marginTop: 10
        }}
        >{obj.desc}</Text>
      </View>
      <TouchableOpacity style={{
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(243, 17, 17, 1)',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
      }}>
        <Text style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
        }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

function Screen4_a () {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                backgroundColor: 'rgba(27, 169, 255, 1)',
                height: 52,
                zIndex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Image source={require('../images/arrowLeft.png')} style={{
                    marginLeft: 10
                }} />
                <Text style={{
                    fontSize: 20,
                    color: 'white'
                }}>Chat</Text>
                <Image source={require('../images/cart.png')} style={{
                    marginRight: 10
                }} />
            </View>
            <View style={{
                marginTop: 42,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                flexWrap: 'wrap'
            }}>
                <Text style={{
                    color: 'black',
                    textAlign: 'center'
                }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item obj={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{
                backgroundColor: 'rgba(27, 169, 255, 1)',
                height: 60,
                zIndex: 1,
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 10
            }}>
                <Image source={require('../images/2.png')} style={{
                    marginLeft: 10
                }} />
                <Image source={require('../images/3.png')} />
                <Image source={require('../images/1.png')} style={{
                    marginRight: 10
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flexDirection: 'row'
    },
    title: {
      fontSize: 32,
      color: "#000"
    },
  });

export default Screen4_a;