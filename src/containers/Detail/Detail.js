import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale, wScale } from '../../utils/resolutions';
import { useNavigation } from '@react-navigation/native';
import routes from '../../routes'
import Modal from './components/Modal'

const Detail = ({ navgation, route }) => {
  const navigation = useNavigation();
  const [heart, setHeart] = useState(false)
  return (
    <Layout testID='detail_screen'>
      <View style={[styles.container, { backgroundColor: route.params.color }]}>
        <View style={styles.header}>
          <View style={styles.viewHeaderBotton}>
            <Button
              testID='back_detail'
              onPress={() => navigation.navigate(routes.HOME)}
              style={styles.icon}
            >
              <Ionicons name="arrow-back-outline" size={26} color={colors.white} />
            </Button>
            <Button
              testID='heart_detail'
              onPress={() => setHeart(!heart)}
              style={styles.icon}
            >
              {
                heart == false ?
                  <Ionicons name="heart-outline" size={26} color={colors.white} />
                  : <Ionicons name="heart" size={26} color={colors.lightRed} />
              }
            </Button>
          </View>
          < View style={styles.viewHeaderFooter}>
            <View>
              <View style={{
                paddingHorizontal: scale(6),
                marginBottom: scale(10),
              }}>
                <Text style={styles.txtName}>
                  {`${route.params.item.name}`}
                </Text>
              </View>
              <View style={styles.viewType}>
                {route.params.item.type.map((item, index) => (
                  <Button
                    testID='type_detail'
                    style={styles.btnType}
                    key={index.toString()}
                  >
                    <Text style={styles.txtType}>
                      {item}
                    </Text>
                  </Button>
                ))}
              </View>
            </View>
            <View style={styles.viewNum}>
              <Text
                testID='num_detail'
                style={styles.txtNum}
              >
                {`#${route.params.item.num}`}
              </Text>
            </View>
          </View>
        </View>
        <View style={{
          backgroundColor: 'white',
          height: 320,
          // borderTopLeftRadius: scale(20),
          // borderTopRightRadius: scale(20),
          borderRadius: scale(20),
          alignItems: 'center',
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            // top: -240, ios
            top: -160,
            zIndex: 1,
          }}>
            <Image
              testID='img_detail'
              source={{ uri: route.params.item.img }}
              // source={{uri: "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"}}
              style={styles.image}
            />
          </View>
          <Modal item={route.params.item} />
        </View>
      </View>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // marginTop: 25,
    // padding: 20, //ios
  },
  header: {
    flexDirection: 'column',
    marginBottom: scale(5),
    padding: scale(10),
    marginTop: 20,
  },
  icon: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: scale(10),
  },
  txtName: {
    fontSize: fontSize.biggest3,
    color: colors.white,
    fontWeight: 'bold',
  },
  viewType: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: scale(10),
    paddingVertical: scale(4),
  },
  btnType:{
    paddingHorizontal: scale(15),
    paddingVertical: scale(4),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: scale(10),
    marginLeft: 5,
  },
  txtType: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.fontSize11,
  },
  image: {
    width: wScale(155),
    aspectRatio: 0.9,
  },
  viewHeaderBotton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewHeaderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  viewNum: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: scale(15),
  },
  txtNum: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.larger,
  },
})
export default Detail
